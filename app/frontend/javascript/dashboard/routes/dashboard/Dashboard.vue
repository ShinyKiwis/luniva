<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <template v-if="route.name === 'dashboard_root'">
    Dashboard View
  </template>
  <template v-else>
    <router-view />
  </template>
</template>
