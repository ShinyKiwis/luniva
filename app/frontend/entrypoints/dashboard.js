import "./application.css";
import { createApp } from "vue";
import App from '../javascript/dashboard/App.vue';
import router from 'dashboard/routes/';

const app = createApp(App);
app
  .use(router)
  .mount('#app')
