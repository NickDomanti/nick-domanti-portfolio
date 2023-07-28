import '@/setup/font-awesome'
import '@/assets/styles/styles.scss'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/setup/pinia'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

declare global {
  interface Window {
    VUE_IS_READY: boolean
  }
}

window.VUE_IS_READY = true

document.addEventListener('nd-start-vue-app', () => {
  createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .use(pinia)
    .use(router)
    .mount('#app')
})