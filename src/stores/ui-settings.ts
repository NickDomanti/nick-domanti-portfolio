import { defineStore } from 'pinia'
import { useStorageRef } from '@/composables/storage-ref'

const storeName = 'uiSettings'

export const useUiSettingsStore = defineStore(storeName, () => {
  const theme = useStorageRef(storeName, 'theme', 'auto')
  const getTheme = () => {
    if (theme.value == 'auto')
      return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return theme.value
  }
  const switchTheme = () => {
    theme.value = getTheme() == 'dark' ? 'light' : 'dark'
  }

  return {
    getTheme,
    switchTheme
  }
})