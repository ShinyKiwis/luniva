import "./application.css";
import 'floating-vue/dist/style.css'
import { createApp } from "vue";
import FloatingVue from "floating-vue";
import App from '../javascript/dashboard/App.vue';
import router from 'dashboard/routes/';

const app = createApp(App);

app
  .use(FloatingVue)
  .use(router)
  .mount('#app')
