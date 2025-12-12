<template>
  <div class="p-4 text-left">
    <div class="flex flex-row gap-2 items-center text-left mb-4">
      <NFlex class="flex-1" justify="end">
        <NButtonGroup size="tiny">
          <n-button
            type="error"
            :disabled="orgUrls?.length == 0"
            @click="orgUrls = ''"
          >
            <template #icon>
              <n-icon><close-round /></n-icon>
            </template>
            Clear
          </n-button>
        </NButtonGroup>
        <NInput
          v-model:value="orgUrls"
          type="textarea"
          placeholder="original vless urls, can contain multiple urls. each url starts with vless://"
          rows="20"
        />
      </NFlex>
      <NButton
        :disabled="loading || orgUrls?.length == 0"
        :loading="loading"
        type="primary"
        @click="convert"
        >Convert</NButton
      >
      <NFlex class="flex-1" justify="end">
        <NButtonGroup size="tiny">
          <n-button
            type="error"
            :disabled="modUrls?.length == 0"
            @click="modUrls = ''"
          >
            <template #icon>
              <n-icon><CloseRound /></n-icon>
            </template>
            Clear
          </n-button>
          <n-button :disabled="modUrls?.length == 0" @click="copyToClipboard">
            <template #icon>
              <n-icon><ContentCopyRound /></n-icon>
            </template>
            Copy
          </n-button>
        </NButtonGroup>
        <NInput
          v-model:value="modUrls"
          type="textarea"
          placeholder="modified url"
          rows="20"
        />
      </NFlex>
    </div>
    <NText type="info">
      This tool looks up the geolocation of the vless server, and append the
      geolocation to the name of the server. e.g.
      vless://uuid@ip:port?remarks=server1 will be converted to
      vless://uuid@ip:port?remarks=server1(US).
    </NText>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  NInput,
  NButton,
  NText,
  NFlex,
  useMessage,
  NButtonGroup
} from 'naive-ui'
import { CloseRound, ContentCopyRound } from '@vicons/material'
import { appendGeolocationToVlessNames } from '@/utils/utils'
const message = useMessage()
const orgUrls = ref<string>('')
const modUrls = ref<string>('')
const loading = ref<boolean>(false)
async function convert() {
  loading.value = true
  try {
    const result = await appendGeolocationToVlessNames(orgUrls.value)
    modUrls.value = result
  } catch (error) {
    message.error(`Error occurred during conversion: ${error}`)
  } finally {
    loading.value = false
  }
}
function copyToClipboard() {
  navigator.clipboard.writeText(modUrls.value)
  message.success('Copied to clipboard')
}
</script>

<style lang=""></style>
