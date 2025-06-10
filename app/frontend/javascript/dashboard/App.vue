<script setup>
import MainLayout from "layouts/MainLayout.vue";
import SideBar from "./components/SideBar.vue";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <MainLayout>
    <template #sidebar>
      <SideBar />
    </template>
    <template #headerbar>
      <HeaderBar />
    </template>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>
