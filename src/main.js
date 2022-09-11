import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";

import scrollFix from "@/plugs/scrollFix";
import ui from '@/UI'
import '@/assets/scss/main.scss'

scrollFix();
const app = createApp(App);

ui.forEach((item) => {
  app.component(item.name, item);
})

app
  .use(router)
  .mount('#app')
