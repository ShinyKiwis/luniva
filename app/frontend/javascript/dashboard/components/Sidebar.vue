<script setup>
import { Icon } from "@iconify/vue";
import { ref } from 'vue';

const isCollapsed = ref(false);
</script>

<template>
  <aside :class="[
      'py-2 border-r border-neutral-200 transition-all duration-300 ease-in-out',
      isCollapsed ? 'w-16' : 'w-1/7'
    ]"
  >
    <div :class="[
        'px-4 pb-2 flex items-center border-b-2 border-neutral-200',
        isCollapsed ? 'justify-center' : 'justify-between'
      ]"
    >
      <a 
        v-if="!isCollapsed"
        href="/" 
        id="logo" 
        class="text-2xl font-bold tracking-wide text-sky-600 select-none cursor-pointer"
      >
        Luniva
      </a>
      <button @click="isCollapsed = !isCollapsed" class="hover:bg-sky-100/75 p-1 rounded-md transition duration-300">
        <Icon 
          :icon="isCollapsed ? 'tabler:layout-sidebar-right-collapse-filled' : 'tabler:layout-sidebar-left-collapse-filled' "
          class="w-7 h-7 text-sky-600 cursor-pointer" 
        />
      </button>
    </div>
    <div>
    </div>
  </aside>
</template>
