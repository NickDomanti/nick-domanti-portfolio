import App from '@/App.vue'
import '@/assets/styles/styles.scss'
import router from '@/router'
import '@/setup/font-awesome'
import pinia from '@/setup/pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

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
