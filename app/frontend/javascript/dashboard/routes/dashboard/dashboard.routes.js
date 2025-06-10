import AppContainer from "./Dashboard.vue";
import focusHall from "./general/focus-hall/focus-hall.routes";
import todoer from "./tools/todoer/todoer.routes";

export default {
  routes: [
    {
      path: '/',
      name: 'dashboard_root',
      component: AppContainer,
      children: [
        ...focusHall.routes,
        ...todoer.routes
      ]
    }
  ]
}
