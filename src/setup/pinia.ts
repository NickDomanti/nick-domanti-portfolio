import { watch } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

let uiSettings;
if ((uiSettings = localStorage.getItem('nd-uiSettings'))) {
  pinia.state.value.uiSettings = JSON.parse(uiSettings)
}

watch(() => pinia.state.value.uiSettings, (newVal) => {
  localStorage.setItem('nd-uiSettings', JSON.stringify(newVal))
}, { deep: true })

export default pinia