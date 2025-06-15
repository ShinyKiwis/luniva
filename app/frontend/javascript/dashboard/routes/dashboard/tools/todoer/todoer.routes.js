import Todoer from "./Todoer.vue";
import TodoList from "./pages/TodoList.vue";
import UpcomingList from "./pages/UpcomingList.vue";
import DoneList from "./pages/DoneList.vue";

export default {
  routes: [
    {
      path: '/tools/todoer',
      name: 'todoer',
      component: Todoer,
      children: [
        {
          path: 'todo',
          name: 'todoer/todo-list',
          component: TodoList
        },
        {
          path: 'upcoming',
          name: 'todoer/upcoming-list',
          component: UpcomingList
        },
        {
          path: 'done',
          name: 'todoer/done-list',
          component: DoneList
        }
      ]
    }
  ]
}
