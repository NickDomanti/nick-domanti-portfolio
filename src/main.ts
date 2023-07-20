import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import 'animate.css'
import './assets/styles/styles.scss'
import './setup/font-awesome'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount('#app')
