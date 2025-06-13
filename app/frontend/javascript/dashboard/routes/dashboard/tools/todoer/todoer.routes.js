import Todoer from "./pages/Todoer.vue";
import TodoList from "./components/TodoList.vue";
import UpcomingList from "./components/UpcomingList.vue";
import DoneList from "./components/DoneList.vue";

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
