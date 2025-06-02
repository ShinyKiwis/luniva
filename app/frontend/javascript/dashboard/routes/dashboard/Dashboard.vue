<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <template v-if="route.name === 'dashboard_root'">
      Dashboard View
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>
