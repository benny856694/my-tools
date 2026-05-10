<template>
  <div class="p-4">
    <div class="mt-2">
      <div v-if="isTargetFirmwarePending || isSourcesPending">Loading...</div>
      <n-form v-else inline :label-width="180">
        <NFormItem path="md5" label="SN">
          <NInput v-model:value.trim="sn" placeholder="输入序列号" />
        </NFormItem>
        <NFormItem path="md5" label="当前版本">
          <NSelect
            v-model:value="deviceCurVer"
            :options="curVerOptions"
            style="min-width: 180px"
            placeholder="选择版本"
          />
        </NFormItem>
        <NFormItem path="size" label="目标固件版本">
          <NSelect
            v-model:value="targetFirmwareId"
            :options="targetFirmwareOptions"
            style="min-width: 180px"
            placeholder="选择目标固件版本"
          />
        </NFormItem>
        <NFormItem
          ref="rPasswordFormItemRef"
          first
          path="Source"
          label="固件存储来源"
        >
          <NSelect
            v-model:value="selectedSourceId"
            :options="sourceOptions"
            style="min-width: 180px"
            placeholder="选择固件存储来源"
          />
        </NFormItem>
        <n-form-item>
          <NButton type="primary" :disabled="!url" @click="handleUpdate">
            推送升级包
          </NButton>
        </n-form-item>
        <n-form-item>
          <NButton :disabled="!firmwareUrl" @click="testDownload">
            <template #icon>
              <NIcon>
                <OpenInNewFilled />
              </NIcon>
            </template>
            测试固件下载
          </NButton>
        </n-form-item>
      </n-form>
      <p>{{ url }}</p>
      <NInput
        v-model:value="updateResult"
        type="textarea"
        placeholder="推送结果"
        readonly
        :autosize="{ minRows: 8 }"
      />
    </div>
    <div class="mt-4">
      <h3>升级日志</h3>
      <NInput
        :value="upgradeLogText"
        type="textarea"
        placeholder="升级日志"
        readonly
        style="height: 300px; overflow: auto;"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConvexQuery } from 'convex-vue'
import { api } from '../../convex/_generated/api'
import { Doc, Id } from '../../convex/_generated/dataModel'
import { NForm, NInput, NButton, NFormItem, NSelect } from 'naive-ui'

import { computed, ref, watch } from 'vue'
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

const deviceCurVer = ref<DeviceCurrentVersion>(DeviceCurrentVersion.China)
const targetFirmwareId = ref<Id<'firmwares'> | null>(null)
const sn = ref('')
const updateResult = ref<string>('')
const { selectedSourceId } = storeToRefs(useMainStore())

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

const upgradeLogText = computed(() =>
  upgradeLogs.value
    .map((entry) => `[${entry.time}] SN: ${entry.sn} ${entry.result}`)
    .join('\n')
)

const addLogEntry = (result: string) => {
  upgradeLogs.value.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
    sn: sn.value || '-',
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
  if (!sn.value) {
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
    return `https://gw.pick-fun.com.cn/device/test/mqtt/upgrade?md5=${targetFirmware.md5}&size=${targetFirmware.size}&url=${encodeURIComponent(source.baseUrl + targetFirmware.fileName)}&sn=${sn.value}&test-verify=1111`
  } else {
    return `https://gw.pick-fun.com/device/test/mqtt/upgrade?md5=${targetFirmware.md5}&size=${targetFirmware.size}&url=${encodeURIComponent(source.baseUrl + targetFirmware.fileName)}&sn=${sn.value}&test-verify=1111`
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

watch(sources, () => {
  if (sources.value?.find((x) => x._id === selectedSourceId.value)) {
    // do nothing
  } else {
    selectedSourceId.value = null
  }
})

const handleUpdate = async (e: MouseEvent) => {
  e.preventDefault()
  try {
    updateResult.value = '升级中...'
    //change the fetch header: accept-language to en-US,en;q=0.9
    const resp = await fetch(url.value, {
      headers: {
        'Accept-Language': 'zh-CN'
      }
    })
    const text = await resp.json()
    const resultText = JSON.stringify(text, null, 2)
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
    // Fallback for strict popup blockers: create an anchor and click it
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

<style lang=""></style>
