<script setup>
import { Icon } from "@iconify/vue";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isCollapsed = ref(false);
const generalItems = [
  { title: 'Dashboard', icon: 'tabler:layout-dashboard', to: 'dashboard_root' },
  { title: 'Focus Hall', icon: 'tabler:target-arrow', to: 'focus_hall' },
  { title: 'Resources', icon: 'tabler:brand-databricks', to: '' },
]

const toolItems = [
  { title: 'Todoer', icon: 'tabler:list-check', to: 'todoer' },
  { title: 'Bookmarker', icon: 'tabler:bookmark', to: '' },
  { title: 'Expense Tracker', icon: 'tabler:zoom-money', to: '' },
]
</script>

<template>
  <aside :class="[
      'py-2 border-r-2 border-neutral-200 transition-all duration-300 ease-in-out z-0',
      isCollapsed ? 'w-16' : 'w-1/7'
    ]"
  >
    <div :class="[
        'h-10 px-4 pb-2 flex items-center border-b-2 border-neutral-200',
        isCollapsed ? 'justify-center' : 'justify-between'
      ]"
    >
      <router-link
        v-if="!isCollapsed"
        :to="{ name: 'dashboard_root' }"
        id="logo" 
        class="text-2xl font-bold tracking-wide text-sky-600 select-none cursor-pointer"
      >
        Luniva
      </router-link>
      <button @click="isCollapsed = !isCollapsed" class="hover:bg-sky-100/75 p-1 rounded-md transition duration-300">
        <Icon 
          :icon="isCollapsed ? 'tabler:layout-sidebar-right-collapse-filled' : 'tabler:layout-sidebar-left-collapse-filled' "
          class="w-7 h-7 text-sky-600 cursor-pointer" 
        />
      </button>
    </div>
    <div class="px-4 pt-2 pb-6 border-b-2 border-neutral-200">
      <span class="font-medium text-neutral-400 block" v-if="!isCollapsed">General</span>
      <ul class="mt-2 flex flex-col gap-3">
        <li v-for="item in generalItems">
          <router-link :to="{ name: item.to }" :class="[
              'flex gap-4',
              isCollapsed ? 'justify-center' : 'items-center',
              item.to === route.name ? 'active-item' : 'inactive-item'
            ]
          ">
            <Icon :icon="item.icon" class="min-w-6 min-h-6"/>
            <span v-if="!isCollapsed" class="whitespace-nowrap">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="px-4 pt-2 pb-6">
      <span class="font-medium text-neutral-400 block" v-if="!isCollapsed">Tools</span>
      <ul class="mt-2 flex flex-col gap-3">
        <li v-for="item in toolItems">
          <router-link :to="{ name: item.to }" :class="[
              'flex gap-4',
              isCollapsed ? 'justify-center' : 'items-center',
              item.to === route.name ? 'active-item' : 'inactive-item'
            ]
          ">
            <Icon :icon="item.icon" class="min-w-6 min-h-6"/>
            <span v-if="!isCollapsed" class="whitespace-nowrap">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
@reference "tailwindcss";
.active-item {
  @apply font-medium text-sky-600 bg-sky-100/75 px-2 py-1 rounded-md;
}

.inactive-item {
  @apply text-neutral-400 hover:text-sky-600 hover:bg-sky-100/75 px-2 py-1 rounded-md transition duration-300;
}
</style>
