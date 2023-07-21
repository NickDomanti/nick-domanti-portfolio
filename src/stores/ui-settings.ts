import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiSettingsStore = defineStore('uiSettings', () => {
  const useDarkTheme = ref(true)

  return {
    useDarkTheme
  }
})