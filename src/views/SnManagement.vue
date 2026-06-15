<template>
  <div class="p-4 flex flex-col gap-4">
    <n-form ref="formRef" inline :model="formValue" :rules="rules">
      <n-form-item path="sn" label="SN">
        <NInput v-model:value.trim="formValue.sn" placeholder="输入序列号" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="remark" label="备注">
        <NInput v-model:value.trim="formValue.remark" placeholder="输入备注" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item>
        <NButton type="primary" :loading="isAddPending" @click="handleAdd">
          添加
        </NButton>
      </n-form-item>
    </n-form>

    <p v-if="isLoading">Loading....</p>
    <template v-else>
      <div class="flex items-center gap-2">
        <n-input
          v-model:value="filterSn"
          placeholder="搜索SN..."
          clearable
          style="width: 240px"
        />
        <span class="text-sm text-gray-500">共 {{ serialNumbers?.length ?? 0 }} 条</span>
      </div>
      <n-data-table
        :columns="columns"
        :data="paginatedData"
        :bordered="true"
        :single-line="false"
        size="small"
        :max-height="600"
        @update:sorter="onSorterChange"
      />
      <div class="flex justify-end">
        <n-pagination
          v-if="serialNumbers && serialNumbers.length > 0"
          :page="page"
          :page-count="pageCount"
          :page-size="pageSize"
          :page-sizes="pageSizes"
          :item-count="filteredData?.length"
          show-size-picker
          show-quick-jumper
          @update:page="page = $event"
          @update:page-size="onPageSizeChange"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useConvexMutation, useConvexQuery } from 'convex-vue'
import { api } from 'convex/_generated/api'
import { ref, computed, h, watch } from 'vue'
import type { FormInst, DataTableColumn } from 'naive-ui'
import {
  NForm,
  NInput,
  NButton,
  NFormItem,
  NIcon,
  NDataTable,
  NPagination,
  NSpace,
  useDialog
} from 'naive-ui'
import { DeleteFilled, EditFilled, CheckFilled, CloseFilled } from '@vicons/material'
import type { Doc, Id } from 'convex/_generated/dataModel'

const pageSize = ref(10)
const page = ref(1)
const pageSizes = [10, 20, 30]
const filterSn = ref('')

const filteredData = computed(() => {
  if (!serialNumbers.value) return []
  if (!filterSn.value) return serialNumbers.value
  const q = filterSn.value.toLowerCase()
  return serialNumbers.value.filter((s) => s.sn.toLowerCase().includes(q) || (s.remark ?? '').toLowerCase().includes(q))
})

// reset to page 1 whenever filter changes
watch(filterSn, () => { page.value = 1 })

interface SortState {
  columnKey: string
  order: 'ascend' | 'descend'
}
const sortState = ref<SortState | null>({ columnKey: '_creationTime', order: 'descend' })

function onSorterChange(sorter: { columnKey: string; order: 'ascend' | 'descend' | false }) {
  if (!sorter.order) {
    sortState.value = null
  } else {
    sortState.value = { columnKey: sorter.columnKey, order: sorter.order }
  }
  page.value = 1
}

const sortedData = computed(() => {
  const data = filteredData.value
  if (!sortState.value) return data

  const { columnKey, order } = sortState.value
  const sorted = [...data]
  sorted.sort((a, b) => {
    let cmp = 0
    switch (columnKey) {
      case 'sn':
      case 'remark':
        cmp = String(a[columnKey] ?? '').localeCompare(String(b[columnKey] ?? ''))
        break
      case '_creationTime':
        cmp = a._creationTime - b._creationTime
        break
    }
    return order === 'ascend' ? cmp : -cmp
  })
  return sorted
})

const onPageSizeChange = (newSize: number) => {
  pageSize.value = newSize
  page.value = 1
}

const { mutate: addSerialNumber, isPending: isAddPending } = useConvexMutation(
  api.pet.addSerialNumber
)

const { data: serialNumbers, isPending: isLoading } = useConvexQuery(
  api.pet.getSerialNumbers,
  {}
)

const { mutate: removeSerialNumber } = useConvexMutation(
  api.pet.removeSerialNumber
)

const deletingRows = ref(new Set<Id<'serialNumbers'>>())

const dialog = useDialog()

const handleDelete = (id: Id<'serialNumbers'>) => {
  dialog.warning({
    title: '确认删除',
    content: '确认删除此序列号?',
    positiveText: '确认',
    negativeText: '取消',
    onPositiveClick: async () => {
      deletingRows.value = new Set(deletingRows.value).add(id)
      try {
        await removeSerialNumber({ id })
      } finally {
        const next = new Set(deletingRows.value)
        next.delete(id)
        deletingRows.value = next
      }
    }
  })
}

const { mutate: updateSerialNumber, isPending: isUpdatePending } = useConvexMutation(
  api.pet.updateSerialNumber
)

const editingId = ref<Id<'serialNumbers'> | null>(null)
const editForm = ref({
  sn: '',
  remark: ''
})

const pageCount = computed(() =>
  sortedData.value.length ? Math.max(1, Math.ceil(sortedData.value.length / pageSize.value)) : 1
)

const paginatedData = computed(() => {
  if (!sortedData.value.length) return []
  const start = (page.value - 1) * pageSize.value
  const end = start + pageSize.value
  return sortedData.value.slice(start, end)
})

const startEdit = (item: Doc<'serialNumbers'>) => {
  editingId.value = item._id
  editForm.value = {
    sn: item.sn,
    remark: item.remark ?? ''
  }
}

const cancelEdit = () => {
  editingId.value = null
  editForm.value = { sn: '', remark: '' }
}

const saveEdit = async (id: Id<'serialNumbers'>) => {
  await updateSerialNumber({ id, sn: editForm.value.sn, remark: editForm.value.remark })
  editingId.value = null
}

const columns = computed<DataTableColumn[]>(() => {
  const sort = sortState.value
  return [
  {
    title: 'SN',
    key: 'sn' as const,
    width: 240,
    sortOrder: sort?.columnKey === 'sn' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'serialNumbers'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.sn,
          onUpdateValue(v: string) { editForm.value.sn = v }
        })
      }
      return row.sn
    }
  },
  {
    title: '添加日期',
    key: '_creationTime' as const,
    width: 150,
    sortOrder: sort?.columnKey === '_creationTime' ? sort.order : false,
    sorter: (a: Doc<'serialNumbers'>, b: Doc<'serialNumbers'>) => a._creationTime - b._creationTime,
    render(row: Doc<'serialNumbers'>) {
      return new Date(row._creationTime).toLocaleString('zh-CN')
    }
  },
  {
    title: '备注',
    key: 'remark' as const,
    width: 200,
    sortOrder: sort?.columnKey === 'remark' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'serialNumbers'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.remark,
          onUpdateValue(v: string) { editForm.value.remark = v }
        })
      }
      return row.remark
    }
  },
  {
    title: 'Actions',
    key: 'actions' as const,
    width: 120,
    render(row: Doc<'serialNumbers'>) {
      if (editingId.value === row._id) {
        return h(NSpace, null, {
          default: () => [
            h(NButton, {
              size: 'small',
              type: 'primary',
              loading: isUpdatePending.value,
              onClick: () => saveEdit(row._id)
            }, { default: () => h(NIcon, null, { default: () => h(CheckFilled) }) }),
            h(NButton, {
              size: 'small',
              onClick: cancelEdit
            }, { default: () => h(NIcon, null, { default: () => h(CloseFilled) }) })
          ]
        })
      }
      return h(NSpace, null, {
        default: () => [
          h(NButton, {
            size: 'small',
            onClick: () => startEdit(row)
          }, { default: () => h(NIcon, null, { default: () => h(EditFilled) }) }),
          h(NButton, {
            size: 'small',
            loading: deletingRows.value.has(row._id),
            onClick: () => handleDelete(row._id)
          }, { default: () => h(NIcon, { color: 'red' }, { default: () => h(DeleteFilled) }) })
        ]
      })
    }
  }
] as unknown as DataTableColumn[]
})

const formRef = ref<FormInst | null>(null)
const rules = {
  sn: {
    required: true,
    message: '请输入序列号',
    trigger: ['input']
  }
}
const formValue = ref({
  sn: '',
  remark: ''
})

const handleAdd = async (e: MouseEvent) => {
  e.preventDefault()
  formRef?.value?.validate(async (errors) => {
    if (!errors) {
      await addSerialNumber({
        sn: formValue.value.sn,
        remark: formValue.value.remark
      })
      formValue.value.sn = ''
      formValue.value.remark = ''
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style scoped></style>
