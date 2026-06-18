<template>
  <n-config-provider
    data-cy="app"
    :theme="theme"
    :class="{ dark: mode }"
    :theme-overrides="appTheme(darkMode)"
    :locale="zhCN"
  >
    <NMessageProvider>
      <NDialogProvider>
        <n-layout position="absolute">
        <n-layout-header
          style="height: 64px; padding: 0 16px 12px 16px"
          bordered
        >
          <div class="flex flex-row justify-between items-center">
            <div class="flex items-center gap-2">
              <n-button v-if="isMobile" quaternary @click="mobileMenuVisible = !mobileMenuVisible">
                <template #icon>
                  <n-icon :size="20"><MenuFilled /></n-icon>
                </template>
              </n-button>
              <h2 @click="handleTitleClick">My Tools</h2>
            </div>
            <n-switch v-model:value="mode" data-cy="dark-mode">
              <template #checked> Dark </template>
              <template #unchecked> Light </template>
              <template #checked-icon>
                <n-icon>
                  <moon />
                </n-icon>
              </template>
              <template #unchecked-icon>
                <n-icon>
                  <sun />
                </n-icon>
              </template>
            </n-switch>
          </div>
        </n-layout-header>
        <n-layout
          class="bg-white dark:bg-gray-800 dark:text-white text-gray-800 h-screen w-screen"
          :has-sider="!isMobile"
          position="absolute"
          style="top: 64px; bottom: 0; overflow: hidden"
        >
          <div v-if="isMobile && mobileMenuVisible" class="mobile-backdrop" @click="mobileMenuVisible = false" />
          <n-layout-sider
            data-cy="sidebar"
            class="h-full"
            :class="{ 'mobile-overlay': isMobile, 'open': isMobile && mobileMenuVisible }"
            collapse-mode="width"
            :width="180"
            :collapsed-width="64"
            :native-scrollbar="false"
            bordered
            :collapsed="collapsed"
            :show-trigger="isMobile ? false : 'arrow-circle'"
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <NMenu
              :options="menuOptions"
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              @update:value="mobileMenuVisible = false"
            />
          </n-layout-sider>
          <n-layout-content :native-scrollbar="false">
            <router-view v-slot="{ Component }">
              <KeepAlive>
                <component :is="Component" class="m-2" />
              </KeepAlive>
            </router-view>
          </n-layout-content>
        </n-layout>
      </n-layout>
      </NDialogProvider>
    </NMessageProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, darkTheme, lightTheme, NMessageProvider, NDialogProvider, NMenu, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { computed, ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import type { Component } from 'vue'
import { appTheme } from '@/lib'
import { h } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { HomeFilled, LinkFilled, PetsFilled, TagFilled, MenuFilled } from '@vicons/material'

const darkStore = localStorage.getItem('dark')
const prefersDark: boolean = darkStore
  ? darkStore === 'true'
  : window.matchMedia('(prefers-color-scheme: dark)').matches

const mode = ref<boolean>(prefersDark)
const darkMode = computed(() => mode.value)
const router = useRouter()

const theme = computed(() => (mode.value ? darkTheme : lightTheme))

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => 'Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeFilled)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'vlessmod'
          }
        },
        { default: () => 'Vless Mod' }
      ),
    key: 'vless-mod-view',
    icon: renderIcon(LinkFilled)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'firmware'
          }
        },
        { default: () => '固件推送' }
      ),
    key: 'firmware-view',
    icon: renderIcon(PetsFilled)
  },
  {
    show: false,
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'firmwareManagement'
          }
        },
        { default: () => 'Firmwares Mgmt' }
      ),
    key: 'firmware-management-view',
    icon: renderIcon(PetsFilled)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'snManagement'
          }
        },
        { default: () => 'SN管理' }
      ),
    key: 'sn-management-view',
    icon: renderIcon(TagFilled)
  }
]

watchEffect(() => {
  localStorage.setItem('dark', `${mode.value}`)
})

const isMobile = ref(window.innerWidth < 768)
const mobileMenuVisible = ref(false)
const collapsed = ref(false)

const onResize = () => {
  isMobile.value = window.innerWidth < 768
  if (isMobile.value) collapsed.value = false
}

onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))

const handleTitleClick = (e: MouseEvent) => {
  e.preventDefault()
  //check if control key is pressed
  if (e.ctrlKey || e.metaKey) {
    router.push('/firmman')
  }
}
</script>

<style lang="sass">
#app
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.mobile-overlay
  position: fixed !important
  top: 64px
  left: 0
  bottom: 0
  z-index: 1000
  transform: translateX(-100%)
  transition: transform 0.3s ease

.mobile-overlay.open
  transform: translateX(0)

.mobile-backdrop
  position: fixed
  top: 64px
  left: 0
  right: 0
  bottom: 0
  background: rgba(0, 0, 0, 0.4)
  z-index: 999
</style>
