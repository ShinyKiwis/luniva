<script setup>
import { Icon } from "@iconify/vue";
import Card from "gcomponents/Card.vue";
import DropdownModal from "gcomponents/DropdownModal.vue";
import { ref } from "vue";

const mode = ref('zen');

const pomodoroConfig = ref({
  pomodoroDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  totalCycles: 2 // 1 cycle = 1 pomodoro + 1 short break
});

const zenConfig = ref({
  zenDuration: 30,
  breakDuration: 10
})

const pomodoroSettings = [
  { id: 'pomodoro', label: 'Pomodoro', icon: 'tabler:clock', model: 'pomodoroDuration', placeholder: '25 minutes' },
  { id: 'short-break', label: 'Short break', icon: 'tabler:clock-pause', model: 'shortBreakDuration', placeholder: '5 minutes' },
  { id: 'long-break', label: 'Long break', icon: 'tabler:clock-stop', model: 'longBreakDuration', placeholder: '15 minutes' },
  { id: 'totalCycles', label: 'Total cycles', icon: 'tabler:clock-question', model: 'totalCycles', placeholder: '4 cycles' },
]

const zenSettings = [
  { id: 'zen', label: 'Zen', icon: 'tabler:plant-2', model: 'zenDuration', placeholder: '30 minutes'},
  { id: 'break', label: 'Break', icon: 'tabler:clock-pause', model: 'breakDuration', placeholder: '10 minutes'},
]
</script>

<template>
  <Card>
    <div class="flex items-center justify-between px-4 py-2">
      <span class="text-base font-medium mb-2">Session Setup</span>
      <div class="text-xs inline-flex items-center bg-gray-100 rounded-full select-none">
        <button
          :class="[
            'px-3 py-1 rounded-full text-xs font-medium transition-colors',
            mode === 'zen'
              ? 'bg-lime-100 text-lime-600 cursor-default'
              : 'text-gray-500 cursor-pointer'
          ]"
          @click="mode = 'zen'"
        >
          Zen
        </button>
        <button
          :class="[
            'px-3 py-1 rounded-full text-xs font-medium transition-colors',
            mode === 'pomodoro'
              ? 'bg-red-100 text-red-700 cursor-default'
              : 'text-gray-500 cursor-pointer'
          ]"
          @click="mode = 'pomodoro'"
        >
          Pomodoro
        </button>
      </div>
    </div>
    <form class="text-sm px-4">
      <input 
        type="text"
        placeholder='Session name'
        class="font-semibold mb-1"
        autofocus
      />
      <input 
        type="text"
        placeholder='Description'
        class="text-xs"
      />
      <div v-if="mode === 'pomodoro'" class="mt-2">
        <span class="font-semibold text-red-700">Pomodoro Settings</span>
        <div
          v-for="item in pomodoroSettings"
          :key="item.id"
          class="flex items-center gap-2 my-2"
        >
          <label :for="item.id" class="inline-flex gap-2 items-center w-56 text-neutral-600 text-xs">
            <Icon :icon="item.icon" class="w-5 h-5" />
            <span>{{ item.label }}</span>
          </label>
          <input
            :id="item.id"
            type="number"
            min="1"
            v-model="pomodoroConfig[item.model]"
            :placeholder="item.placeholder"
          />
        </div>
      </div>
      <div v-else class="mt-2">
        <span class="font-semibold text-lime-600">Zen Settings</span>
        <div
          v-for="item in zenSettings"
          :key="item.id"
          class="flex items-center gap-2 my-2"
        >
          <label :for="item.id" class="inline-flex gap-2 items-center w-56 text-neutral-600 text-xs">
            <Icon :icon="item.icon" class="w-5 h-5" />
            <span>{{ item.label }}</span>
          </label>
          <input
            :id="item.id"
            type="number"
            min="1"
            v-model="zenConfig[item.model]"
            :placeholder="item.placeholder"
          />
        </div>
      </div>
    </form>
    <div class="border-t-2 border-neutral-200 mt-4 px-4 py-2 flex items-center justify-between">
      <DropdownModal>
        <template #trigger>
          <button class="group-[.dropdown-open]:bg-neutral-200/50 hover:bg-neutral-200/50 rounded-md flex items-center px-2 py-1 gap-1 font-medium text-sm text-neutral-700 cursor-pointer">
            <Icon icon="tabler:message-chatbot" class="w-5 h-5" />
            <span>Activity</span>
            <Icon icon="tabler:caret-down-filled" class="w-3 h-3" />
          </button>
        </template>
        <template #content>
          <span>Content</span>
        </template>
      </DropdownModal>
      <button class="primary-button">
        Start
      </button>
    </div>
  </Card>
</template>
