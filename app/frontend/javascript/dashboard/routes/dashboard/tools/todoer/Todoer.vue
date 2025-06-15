<script setup>
import TodoerSidebar from "./components/TodoerSidebar.vue";
</script>

<template>
  <div class="p-8 h-full">
    <div class="flex gap-8">
      <TodoerSidebar />
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>
