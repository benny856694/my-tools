<template>
  <div class="p-4 flex flex-col" style="height: calc(100vh - 144px)">
    <div class="shrink-0">
      <div v-if="isTargetFirmwarePending || isSourcesPending">Loading...</div>
      <n-form v-else :inline="!isMobile" :label-width="isMobile ? 'auto' : 180">
        <NFormItem path="md5" label="SN">
          <NAutoComplete
            v-model:value="sn"
            :options="snAutoCompleteOptions"
            placeholder="输入或选择序列号"
            :style="{ minWidth: isMobile ? '0' : '240px', width: isMobile ? '100%' : undefined }"
            clearable
          />
        </NFormItem>
        <NFormItem ref="curVerFormItemRef" path="md5" label="当前版本">
          <NPopover
            :show="showCurVerPopover"
            trigger="manual"
            placement="top"
          >
            <template #trigger>
              <NSelect
                v-model:value="deviceCurVer"
                :options="curVerOptions"
                :style="{ minWidth: isMobile ? '0' : '180px', width: isMobile ? '100%' : undefined }"
                placeholder="选择版本"
              />
            </template>
            <span style="color: #f0a020">设备不存在，请检查当前版本是否选择正确</span>
          </NPopover>
        </NFormItem>
        <NFormItem path="size" label="目标固件版本">
          <NSelect
            v-model:value="targetFirmwareId"
            :options="targetFirmwareOptions"
            filterable
            :style="{ minWidth: isMobile ? '0' : '180px', width: isMobile ? '100%' : undefined }"
            placeholder="选择目标固件版本"
          />
        </NFormItem>
        <NFormItem first path="Source" label="固件存储来源">
          <NSelect
            v-model:value="selectedSourceId"
            :options="sourceOptions"
            :style="{ minWidth: isMobile ? '0' : '180px', width: isMobile ? '100%' : undefined }"
            placeholder="选择固件存储来源"
          />
        </NFormItem>
        <n-form-item>
          <div class="flex gap-2" :class="{ 'flex-wrap': isMobile }">
            <NButton type="primary" :disabled="!url" @click="handleUpdate">
              推送升级包
            </NButton>
            <NButton :disabled="!firmwareUrl" @click="testDownload">
              <template #icon>
                <NIcon>
                  <OpenInNewFilled />
                </NIcon>
              </template>
              测试固件下载
            </NButton>
          </div>
        </n-form-item>
      </n-form>
      <NInput
        :value="url"
        placeholder="请填写完整信息以生成推送链接"
        readonly
        @focus="($event.target as HTMLInputElement).select()"
      />
      <NInput
        v-model:value="updateResult"
        class="mt-2"
        type="textarea"
        placeholder="推送结果"
        readonly
        :autosize="{ minRows: 8 }"
      />
    </div>
    <div ref="tableContainerRef" class="mt-4 flex-1 min-h-0">
      <n-data-table
        :columns="logColumns"
        :data="upgradeLogs"
        size="small"
        :max-height="tableMaxHeight"
        :bordered="true"
        :single-line="false"
        class="themed-scrollbar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConvexQuery } from 'convex-vue'
import { api } from '../../convex/_generated/api'
import { Doc, Id } from '../../convex/_generated/dataModel'
import {
  NForm,
  NInput,
  NButton,
  NFormItem,
  NSelect,
  NDataTable,
  NPopover,
  NAutoComplete
} from 'naive-ui'

import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { OpenInNewFilled } from '@vicons/material'
import { useMainStore } from '@/store'
import { storeToRefs } from 'pinia'

enum DeviceCurrentVersion {
  China,
  Global
}

const { data: targetFirmwares, isPending: isTargetFirmwarePending } =
  useConvexQuery(api.pet.getFirmwares, {})
const { data: sources, isPending: isSourcesPending } = useConvexQuery(
  api.pet.getSources,
  {}
)
const { data: serialNumbers } = useConvexQuery(api.pet.getSerialNumbers, {})

const deviceCurVer = ref<DeviceCurrentVersion>(DeviceCurrentVersion.China)
const targetFirmwareId = ref<Id<'firmwares'> | null>(null)
const sn = ref<string | undefined>(undefined)
const snOnly = computed(() => sn.value?.split(' ')[0]?.trimEnd() ?? '')
const updateResult = ref<string>('')
const { selectedSourceId } = storeToRefs(useMainStore())

const curVerFormItemRef = ref<InstanceType<typeof NFormItem> | null>(null)
const showCurVerPopover = ref(false)
let curVerPopoverTimer: ReturnType<typeof setTimeout> | null = null

const hideCurVerPopover = () => {
  showCurVerPopover.value = false
  if (curVerPopoverTimer) {
    clearTimeout(curVerPopoverTimer)
    curVerPopoverTimer = null
  }
}

const curVerOptions = [
  { label: '中国大陆', value: DeviceCurrentVersion.China },
  { label: '海外版', value: DeviceCurrentVersion.Global }
]

const sourceOptions = computed(() => {
  return sources.value
    ? sources.value.map((src: Doc<'sources'>) => ({
        label: src.name,
        value: src._id
      }))
    : []
})

const snAutoCompleteOptions = computed<{ label: string; value: string }[]>(
  () => {
    if (!serialNumbers.value) return []
    const query = sn.value?.toLowerCase() ?? ''
    return serialNumbers.value
      .filter(
        (s: Doc<'serialNumbers'>) =>
          !query ||
          s.sn.toLowerCase().includes(query) ||
          (s.remark && s.remark.toLowerCase().includes(query))
      )
      .map((s: Doc<'serialNumbers'>) => ({
        label: s.remark ? `${s.sn} (${s.remark})` : s.sn,
        value: s.sn
      }))
  }
)

interface FirmwareUpgradeLogEntry {
  id: string
  time: string
  sn: string
  result: string
}

const targetFirmwareOptions = computed(() => {
  return targetFirmwares.value
    ? targetFirmwares.value.map((fw: Doc<'firmwares'>) => ({
        label: fw.name ?? fw.fileName,
        value: fw._id
      }))
    : []
})

const upgradeLogs = ref<FirmwareUpgradeLogEntry[]>([])

const logColumns = [
  { title: '时间', key: 'time', width: 160 },
  { title: 'SN', key: 'sn', width: 240 },
  { title: '结果', key: 'result' }
]

const addLogEntry = (result: string) => {
  upgradeLogs.value.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    sn: snOnly.value || '-',
    result
  })
}

const url = computed(() => {
  if (!targetFirmwareId.value) {
    return ''
  }
  if (!selectedSourceId) {
    return ''
  }
  if (!snOnly.value) {
    return ''
  }
  const targetFirmware = targetFirmwares.value?.find(
    (fw: Doc<'firmwares'>) => fw._id === targetFirmwareId.value
  )
  const source = sources.value?.find(
    (src: Doc<'sources'>) => src._id === selectedSourceId.value
  )

  if (!targetFirmware) {
    return ''
  }
  if (!source) {
    return ''
  }

  if (deviceCurVer.value === DeviceCurrentVersion.China) {
    return `https://gw.pick-fun.com.cn/device/test/mqtt/upgrade?md5=${targetFirmware.md5}&size=${targetFirmware.size}&url=${encodeURIComponent(source.baseUrl + targetFirmware.fileName)}&sn=${snOnly.value}&test-verify=1111`
  } else {
    return `https://gw.pick-fun.com/device/test/mqtt/upgrade?md5=${targetFirmware.md5}&size=${targetFirmware.size}&url=${encodeURIComponent(source.baseUrl + targetFirmware.fileName)}&sn=${snOnly.value}&test-verify=1111`
  }
})

const firmwareUrl = computed(() => {
  if (!targetFirmwareId.value) {
    return ''
  }
  if (!selectedSourceId.value) {
    return ''
  }
  const targetFirmware = targetFirmwares.value?.find(
    (fw: Doc<'firmwares'>) => fw._id === targetFirmwareId.value
  )
  const source = sources.value?.find(
    (src: Doc<'sources'>) => src._id === selectedSourceId.value
  )

  if (!targetFirmware) {
    return ''
  }
  if (!source) {
    return ''
  }

  return `${source.baseUrl}${targetFirmware.fileName}`
})

watch(targetFirmwares, () => {
  if (targetFirmwares.value?.find((x) => x._id === targetFirmwareId.value)) {
    // do nothing
  } else {
    targetFirmwareId.value = null
  }
})

watch(deviceCurVer, () => {
  hideCurVerPopover()
})

watch(sources, () => {
  if (sources.value?.find((x) => x._id === selectedSourceId.value)) {
    // do nothing
  } else {
    selectedSourceId.value = null
  }
})

const windowWidth = ref(window.innerWidth)
const isMobile = computed(() => windowWidth.value < 640)

const tableContainerRef = ref<HTMLElement | null>(null)
const tableMaxHeight = ref(0)
let resizeObserver: ResizeObserver | null = null

const onWindowResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', onWindowResize)
  const el = tableContainerRef.value
  if (el) {
    resizeObserver = new ResizeObserver(() => {
      tableMaxHeight.value = el.getBoundingClientRect().height
    })
    resizeObserver.observe(el)
    tableMaxHeight.value = el.getBoundingClientRect().height
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  resizeObserver?.disconnect()
  if (curVerPopoverTimer) clearTimeout(curVerPopoverTimer)
})

const handleUpdate = async (e: MouseEvent) => {
  e.preventDefault()
  try {
    updateResult.value = '升级中...'
    const resp = await fetch(url.value, {
      headers: {
        'Accept-Language': 'zh-CN'
      }
    })
    const text = await resp.json()
    const resultText = JSON.stringify(text, null, 2)
    if (text.message === '设备不存在') {
      showCurVerPopover.value = true
      if (curVerPopoverTimer) clearTimeout(curVerPopoverTimer)
      curVerPopoverTimer = setTimeout(() => {
        showCurVerPopover.value = false
      }, 5000)
    } else {
      hideCurVerPopover()
    }
    updateResult.value = resultText
    addLogEntry(text.message)
  } catch (err) {
    const errorText = `错误: ${err}`
    updateResult.value = errorText
    addLogEntry(errorText)
  }
}

const testDownload = async (e: MouseEvent) => {
  e.preventDefault()

  try {
    const newWin = window.open(
      firmwareUrl.value,
      '_blank',
      'noopener,noreferrer'
    )
    if (newWin) {
      newWin.focus?.()
      updateResult.value = 'Opened firmware URL in a new window'
      return
    }
    const a = document.createElement('a')
    a.href = firmwareUrl.value
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    a.remove()
  } catch (err) {
    updateResult.value = `Error: ${err}`
  }
}
</script>

<style lang="scss">
.themed-scrollbar .n-data-table-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 transparent;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a1a1a1;
    }
  }
}

.dark .themed-scrollbar .n-data-table-wrapper {
  scrollbar-color: #555 transparent;

  &::-webkit-scrollbar-thumb {
    background: #555;

    &:hover {
      background: #777;
    }
  }
}
</style>
