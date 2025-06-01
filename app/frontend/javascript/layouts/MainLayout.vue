<script setup>
</script>

<template>
  <div class="min-h-screen flex">
    <slot name='sidebar' if="$slots.sidebar" />
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>
