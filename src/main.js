import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import ui from '@/UI'
import '@/assets/scss/main.scss'

const app = createApp(App);

ui.forEach((item) => {
  app.component(item.name, item);
  console.log(item)
})

app
  .use(router)
  .mount('#app')
