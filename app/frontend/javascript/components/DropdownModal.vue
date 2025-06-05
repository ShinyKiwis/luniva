<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';

const target = useTemplateRef('target');
const isOpen = ref(false)

onClickOutside(target, _event => {
  isOpen.value = false;
})

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="relative text-left" ref="target">
    <div 
      class="group"
      :class="{ 'dropdown-open': isOpen }"
      @click="toggle"
    >
      <slot name="trigger" />
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute left-1/2 mt-1 w-64 h-fit bg-white border-2 border-neutral-200 rounded-md shadow-md z-10 transform -translate-x-1/2 isolate"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
