<script setup>
import { Icon } from "@iconify/vue";

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
  <div class="my-3 flex flex-col gap-4">
    <h2>{{ greetingMessage() }}</h2>
    <span class="text-sm text-gray-500">
      What do you plan to do today?
    </span>
    <div class="ms-4">
      <span class="flex items-center gap-2 group cursor-pointer">
        <Icon icon='tabler:plus' class="w-5 h-5 text-sky-600 rounded-full group-hover:bg-sky-600 group-hover:text-white"/>
        <span class="text-sm text-neutral-500 group-hover:text-sky-600">Add task</span>
      </span>
    </div>
  </div>
</template>
