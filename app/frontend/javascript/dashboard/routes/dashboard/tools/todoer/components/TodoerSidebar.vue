<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const taskItems = [
  { title: 'To do', icon: 'tabler:calendar-search', to: 'todoer/todo-list' },
  { title: 'Upcoming', icon: 'tabler:calendar-clock', to: 'todoer/upcoming-list' },
  { title: 'Done', icon: 'tabler:calendar-smile', to: 'todoer/done-list' }
]

const projectItems = ref([])
</script>
<template>
  <div class="w-60">
    <span class="font-medium text-sky-600 block header-item">Tasks</span>
    <ul class="ms-2 mt-2 text-sm flex flex-col gap-3">
      <li v-for="item in taskItems">
        <router-link :to="{ name: item.to }" :class="[
          'flex items-center gap-2',
          item.to === route.name ? 'active-item' : 'inactive-item'
        ]
        ">
          <Icon :icon="item.icon" class="w-6 h-6"/>
          <span class="whitespace-nowrap">{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
    <div class="flex items-center justify-between header-item group">
      <span class="font-medium text-sky-600 block">Projects</span>
      <Icon icon="tabler:plus" class="hidden group-hover:block hover:scale-125 transition duration-200 text-sky-600 w-6 h-6" />
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";
.header-item {
  @apply my-3 px-2 py-1 rounded-md hover:bg-sky-100/75 cursor-pointer;
}

.active-item {
  @apply font-medium text-sky-600 bg-sky-100/75 px-2 py-1 rounded-md;
}

.inactive-item {
  @apply text-neutral-500 hover:bg-neutral-100 px-2 py-1 rounded-md transition duration-300;
}
</style>
