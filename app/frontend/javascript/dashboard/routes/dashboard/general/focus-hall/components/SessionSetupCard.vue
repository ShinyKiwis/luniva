<script setup>
import { Icon } from "@iconify/vue";
import ActivityCardModal from "./ActivityCardModal.vue"
import Card from "gcomponents/Card.vue";
import { ref, computed } from "vue";

const mode = ref('zen');
const sessionName = ref('');
const sessionDescription = ref('');

const isDisabled = computed(() => {
  return sessionName.value.trim() === ''
})

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
  <Card class="w-96">
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
        v-model="sessionName"
        type="text"
        placeholder='Session name'
        class="font-semibold mb-1"
        autofocus
      />
      <textarea 
        v-model="sessionDescription"
        type="text"
        placeholder='Description'
        class="w-full focus:outline-none max-h-24 resize-y text-xs"
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
    <div class="border-t-2 border-neutral-200 mt-4 ps-2 pe-4 py-2 flex items-center justify-between">
      <ActivityCardModal />
      <button 
        :class="isDisabled ? 'disabled-primary-button' : 'primary-button'"
        :disabled="isDisabled"
      >
        Start
      </button>
    </div>
  </Card>
</template>
