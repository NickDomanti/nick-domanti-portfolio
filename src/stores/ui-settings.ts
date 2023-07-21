import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiSettingsStore = defineStore('uiSettings', () => {
  const useDarkTheme = ref(true)

  return {
    useDarkTheme
  }
})