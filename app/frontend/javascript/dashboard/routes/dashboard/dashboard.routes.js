import AppContainer from "./Dashboard.vue";
import focusHall from "./general/focus-hall/focus-hall.routes";

export default {
  routes: [
    {
      path: '/',
      name: 'dashboard_root',
      component: AppContainer,
      children: [
        ...focusHall.routes
      ]
    }
  ]
}
