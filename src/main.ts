import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/setup/pinia'
import '@/assets/styles/styles.scss'
import '@/setup/font-awesome'
import 'animate.css'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(pinia)
  .use(router)
  .mount('#app')
