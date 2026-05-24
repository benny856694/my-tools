<template>
  <div class="p-4 flex flex-col gap-4">
    <n-form ref="formRef" inline :model="formValue" :rules="rules">
      <n-form-item path="name" label="名称">
        <NInput v-model:value.trim="formValue.name" @keydown.enter.prevent />
      </n-form-item>
      <NFormItem path="md5" label="Md5">
        <NInput v-model:value.trim="formValue.md5" @keydown.enter.prevent />
      </NFormItem>
      <NFormItem path="size" label="Size">
        <NInput v-model:value.trim="formValue.size" @keydown.enter.prevent />
      </NFormItem>
      <NFormItem
        ref="rPasswordFormItemRef"
        first
        path="fileName"
        label="File Name"
      >
        <NInput
          v-model:value.trim="formValue.fileName"
          width="160"
          @keydown.enter.prevent
        />
      </NFormItem>
      <n-form-item path="remark" label="备注">
        <NInput v-model:value.trim="formValue.remark" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item>
        <NButton type="primary" :loading="isAddPending" @click="handleAdd">
          添加
        </NButton>
      </n-form-item>
      <n-form-item>
        <NButton :loading="isAddPending" @click="handlePaste">
          粘贴
        </NButton>
      </n-form-item>
    </n-form>

    <p v-if="isLoading">Loading....</p>
    <template v-else>
      <div class="flex items-center gap-2">
        <n-input
          v-model:value="filterName"
          placeholder="搜索名称..."
          clearable
          style="width: 240px"
        />
        <span class="text-sm text-gray-500">共 {{ firmwares?.length ?? 0 }} 条</span>
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
          v-if="firmwares && firmwares.length > 0"
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
  NSpace
} from 'naive-ui'
import { DeleteFilled, EditFilled, CheckFilled, CloseFilled } from '@vicons/material'
import type { Doc, Id } from 'convex/_generated/dataModel'

const pageSize = ref(10)
const page = ref(1)
const pageSizes = [10, 20, 30]
const filterName = ref('')

const filteredData = computed(() => {
  if (!firmwares.value) return []
  if (!filterName.value) return firmwares.value
  const q = filterName.value.toLowerCase()
  return firmwares.value.filter((f) => f.name.toLowerCase().includes(q) || (f.remark ?? '').toLowerCase().includes(q))
})

// reset to page 1 whenever filter changes
watch(filterName, () => { page.value = 1 })

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
      case 'name':
      case 'fileName':
      case 'md5':
      case 'remark':
        cmp = String(a[columnKey]).localeCompare(String(b[columnKey]))
        break
      case 'size':
        cmp = Number(a.size) - Number(b.size)
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

const { mutate: addFirmware, isPending: isAddPending } = useConvexMutation(
  api.pet.addFirmware
)

const { data: firmwares, isPending: isLoading } = useConvexQuery(
  api.pet.getFirmwares,
  {}
)

const { mutate: removeFirmware } = useConvexMutation(
  api.pet.removeFirmware
)

const deletingRows = ref(new Set<Id<'firmwares'>>())

const handleDelete = async (id: Id<'firmwares'>) => {
  deletingRows.value = new Set(deletingRows.value).add(id)
  try {
    await removeFirmware({ id })
  } finally {
    const next = new Set(deletingRows.value)
    next.delete(id)
    deletingRows.value = next
  }
}

const { mutate: updateFirmware, isPending: isUpdatePending } = useConvexMutation(
  api.pet.updateFirmware
)

const editingId = ref<Id<'firmwares'> | null>(null)
const editForm = ref({
  name: '',
  md5: '',
  size: '',
  fileName: '',
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

const startEdit = (item: Doc<'firmwares'>) => {
  editingId.value = item._id
  editForm.value = {
    name: item.name,
    md5: item.md5,
    size: item.size,
    fileName: item.fileName,
    remark: item.remark ?? ''
  }
}

const cancelEdit = () => {
  editingId.value = null
  editForm.value = { name: '', md5: '', size: '', fileName: '', remark: '' }
}

const saveEdit = async (id: Id<'firmwares'>) => {
  await updateFirmware({ id, ...editForm.value })
  editingId.value = null
}

const columns = computed<DataTableColumn[]>(() => {
  const sort = sortState.value
  return [
  {
    title: 'Name',
    key: 'name' as const,
    width: 120,
    sortOrder: sort?.columnKey === 'name' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'firmwares'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.name,
          onUpdateValue(v: string) { editForm.value.name = v }
        })
      }
      return row.name
    }
  },
  {
    title: 'File Name',
    key: 'fileName' as const,
    width: 240,
    sortOrder: sort?.columnKey === 'fileName' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'firmwares'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.fileName,
          onUpdateValue(v: string) { editForm.value.fileName = v }
        })
      }
      return row.fileName
    }
  },
  {
    title: 'Md5',
    key: 'md5' as const,
    width: 200,
    sortOrder: sort?.columnKey === 'md5' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'firmwares'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.md5,
          onUpdateValue(v: string) { editForm.value.md5 = v }
        })
      }
      return row.md5
    }
  },
  {
    title: 'Size',
    key: 'size' as const,
    width: 120,
    sortOrder: sort?.columnKey === 'size' ? sort.order : false,
    sorter: (a: Doc<'firmwares'>, b: Doc<'firmwares'>) => Number(a.size) - Number(b.size),
    render(row: Doc<'firmwares'>) {
      if (editingId.value === row._id) {
        return h(NInput, {
          value: editForm.value.size,
          onUpdateValue(v: string) { editForm.value.size = v }
        })
      }
      return row.size
    }
  },
  {
    title: '添加日期',
    key: '_creationTime' as const,
    width: 150,
    sortOrder: sort?.columnKey === '_creationTime' ? sort.order : false,
    sorter: (a: Doc<'firmwares'>, b: Doc<'firmwares'>) => a._creationTime - b._creationTime,
    render(row: Doc<'firmwares'>) {
      return new Date(row._creationTime).toLocaleString('zh-CN')
    }
  },
  {
    title: '备注',
    key: 'remark' as const,
    width: 160,
    sortOrder: sort?.columnKey === 'remark' ? sort.order : false,
    sorter: 'default' as const,
    render(row: Doc<'firmwares'>) {
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
    render(row: Doc<'firmwares'>) {
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
  name: {
    required: true,
    message: 'Please input name',
    trigger: ['input']
  },
  fileName: {
    required: true,
    message: 'Please input file name',
    trigger: ['input']
  },
  md5: {
    required: true,
    message: 'Please input md5',
    trigger: 'blur'
  },
  size: {
    required: true,
    message: 'Please input size',
    trigger: ['input', 'blur']
  }
}
const formValue = ref({
  name: '',
  md5: '',
  size: '',
  fileName: '',
  remark: ''
})

const handleAdd = async (e: MouseEvent) => {
  e.preventDefault()
  formRef?.value?.validate(async (errors) => {
    if (!errors) {
      await addFirmware({
        fileName: formValue.value.fileName,
        md5: formValue.value.md5,
        size: formValue.value.size,
        name: formValue.value.name,
        remark: formValue.value.remark
      })
      formValue.value.md5 = ''
      formValue.value.size = ''
      formValue.value.fileName = ''
      formValue.value.name = ''
      formValue.value.remark = ''
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const handlePaste = async (e: MouseEvent) => {
  e.preventDefault()
  const text = prompt('粘贴JSON格式的固件信息到此处:')
  if (!text) {
    return
  }

  const obj = JSON.parse(text)
  if (obj) {
    formValue.value.name = ''
    const lastSlashIndex = obj.url.lastIndexOf('/')
    const filename = obj.url.substring(lastSlashIndex + 1)
    formValue.value.fileName = filename
    formValue.value.md5 = obj.md5
    formValue.value.size = obj.size
  } else {
    alert('Clipboard content is not in the correct format.')
  }
}
</script>

<style scoped></style>
