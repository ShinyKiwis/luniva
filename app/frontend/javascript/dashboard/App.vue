<script setup>
import MainLayout from "layouts/MainLayout.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <MainLayout>
    <template #sidebar>
      <Sidebar />
    </template>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>
