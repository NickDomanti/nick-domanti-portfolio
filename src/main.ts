import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'  
import './assets/styles/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './setup/font-awesome'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
