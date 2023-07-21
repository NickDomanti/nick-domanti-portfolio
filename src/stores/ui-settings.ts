import { defineStore } from 'pinia'
import { useStorageRef } from '@/composables/storage-ref'

const storeName = 'uiSettings'

export const useUiSettingsStore = defineStore(storeName, () => {
  const getThemeFromStorage = useStorageRef(storeName, 'getThemeFromStorage', false)
  const useDarkTheme = useStorageRef(
    storeName,
    'useDarkTheme',
    matchMedia('(prefers-color-scheme: dark)').matches,
    {
      mergeDefaults(storageValue, defaults) {
        if (getThemeFromStorage.value) return storageValue;
        return defaults;
      }
    }
  )

  return {
    getThemeFromStorage,
    useDarkTheme
  }
})