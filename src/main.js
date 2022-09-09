import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import '@/assets/scss/main.scss'

const app = createApp(App);

app
  .use(router)
  .mount('#app')
