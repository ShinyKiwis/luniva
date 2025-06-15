<script setup>
import { Icon } from "@iconify/vue";
import AddTaskModal from "../components/AddTaskModal.vue";

const greetingMessage = () => {
  const hour = new Date().getHours();

  switch (true) {
    case (hour >= 5 && hour < 12):
      return "Good Morning";
    case (hour >= 12 && hour < 18):
      return "Good Afternoon";
    case (hour >= 18 && hour < 22):
      return "Good Evening";
    default:
      return "Good Night";
  }
}
</script>

<template>
  <div class="w-3/4 mx-auto my-3 flex flex-col gap-4">
    <h2>{{ greetingMessage() }}</h2>
    <span class="text-sm text-gray-500">
      What do you plan to do today?
    </span>
    <AddTaskModal />
  </div>
</template>
