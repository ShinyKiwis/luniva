<script setup>
</script>

<template>
  <div class="min-h-screen flex">
    <slot name='sidebar' if="$slots.sidebar" />
    <div class="flex flex-col flex-1 pt-2">
      <slot name='headerbar' if="$slots.headerbar" />
      <main class="flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>
