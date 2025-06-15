<script setup>
import DateHelper from "ghelpers/dateHelper";
import { Icon } from "@iconify/vue";
import { ref,computed } from "vue";
import { hideAllPoppers } from 'floating-vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const toggleModal = ref(false);
const taskName = ref("");
const taskDescription = ref("");
const taskOptions = ref({
  date: DateHelper.currentEndOfDay,
  priority: null
});

const projects = ref([])
const selectedProject = ref("");

const currentPriority = computed(() => {
  return priorityOptions.find(option => option.value === taskOptions.value.priority)
})

const handleTaskOptionsSelect = (option, event) => {
  const selectedValue = event.currentTarget.dataset.value;
  const currentValue = taskOptions.value[option];
  taskOptions.value[option] = selectedValue === currentValue ? null : selectedValue;

  hideAllPoppers();
}

const priorityOptions = [
  { name: 'Priority Urgent', color: 'text-red-600', value: '1'},
  { name: 'Priority High', color: 'text-yellow-500', value: '2'},
  { name: 'Priority Medium', color: 'text-green-600', value: '3'},
  { name: 'Priority Low', color: 'text-sky-600', value: '4'},
]

const clearDate = () => {
  taskOptions.value.date = null;
}

</script>

<template>
  <div>
    <button 
      v-if="!toggleModal" 
      class="flex items-center gap-2 group cursor-pointer"
      @click="toggleModal=!toggleModal"
    >
      <Icon icon='tabler:plus' class="w-5 h-5 text-sky-600 rounded-full group-hover:bg-sky-600 group-hover:text-white"/>
      <span class="text-sm text-neutral-500 group-hover:text-sky-600">Add task</span>
    </button>
    <div v-else class="rounded-md border border-neutral-300">
      <form class="text-sm">
        <div class="px-4 py-2">
          <input 
            v-model="taskName"
            type="text"
            placeholder="Task name"
            class="font-semibold mb-1"
            autofocus
          />
          <textarea 
            v-model="taskDescription"
            type="text"
            placeholder='Description'
            class="w-full focus:outline-none min-h-12 max-h-24 resize-y text-xs"
          />
          <div class="flex gap-2">
            <VDropdown :distance="6">
              <span class="flex items-center gap-1 text-sm text-neutral-500 cursor-pointer border border-neutral-300 hover:bg-neutral-200/50 rounded-md px-2 py-1">
                <template v-if="!taskOptions.date">
                  <Icon icon='tabler:calendar-week' class="w-5 h-5 text-neutral-400"/>
                  <span>Date</span>
                </template>
                <template v-else-if="DateHelper.isToday(taskOptions.date)">
                  <Icon icon='tabler:calendar-week' class="w-5 h-5 text-green-600"/>
                  <span class="text-green-600">Today</span>
                </template>
                <template v-else>
                  <Icon icon='tabler:calendar-week' class="w-5 h-5 text-sky-600"/>
                  <span>{{ DateHelper.formatDate(taskOptions.date) }}</span>
                </template>
              </span>
              <template #popper>
                <div class="p-2">
                  <button 
                    class="px-2 py-1 rounded-md text-sm text-neutral-600 flex items-center gap-2 hover:bg-neutral-200/50 mb-2 w-full cursor-pointer"
                    @click.stop="clearDate"
                  >
                    <Icon icon='tabler:calendar-x' class="w-5 h-5"/>
                    <span>No Date</span>
                  </button>
                  <VueDatePicker 
                    v-model="taskOptions.date" 
                    inline 
                    auto-apply
                    :min-date="new Date()"
                  >

                  </VueDatePicker>
                </div>
              </template>
            </VDropdown>
            <VDropdown :distance="6">
              <span class="flex items-center gap-1 text-sm text-neutral-500 cursor-pointer border border-neutral-300 hover:bg-neutral-200/50 rounded-md px-2 py-1">
                <template v-if="!taskOptions.priority">
                  <Icon icon='tabler:flag' class="w-5 h-5 text-neutral-400"/>
                  <span>No Priority</span>
                </template>
                <template v-else>
                  <Icon icon='tabler:flag-filled' :class="`w-5 h-5 ${currentPriority.color}`" />
                  <span>{{ currentPriority.name }}</span>
                </template>
              </span>
              <template #popper>
                <ul class="flex flex-col p-2 gap-2 text-sm">
                  <li class="w-44" v-for="item in priorityOptions" :key="item.value" @click="handleTaskOptionsSelect('priority', $event)" :data-value="item.value">
                    <span class="flex items-center gap-1 cursor-pointer hover:bg-neutral-200/50 px-2 py-1 rounded-md">
                      <Icon icon='tabler:flag-filled' :class="`w-5 h-5 ${item.color}`" />
                      <span>{{ item.name }}</span>
                      <Icon v-if="taskOptions.priority === item.value" icon='tabler:check' class="w-5 h-5 text-sky-600 ms-auto" />
                    </span>
                  </li>
                </ul>
              </template>
            </VDropdown>
          </div>
        </div>
        <div class="border-t border-neutral-300 px-4 py-2 flex justify-between items-center">
          <div>
            <VDropdown :distance="6">
              <span class="group-[.dropdown-open]:bg-neutral-200/50 hover:bg-neutral-200/50 rounded-md flex items-center px-2 py-1 gap-1 font-medium text-sm text-neutral-700 cursor-pointer">
                <Icon icon="tabler:message-chatbot" class="w-5 h-5" />
                <span>Project</span>
                <Icon icon="tabler:caret-down-filled" class="w-3 h-3" />
              </span>
              <template #popper>
                test
              </template>
            </VDropdown>
          </div>
          <div>
            <button 
              class="me-4 secondary-cancel-button"
              @click.stop="toggleModal = false"
            >
              Cancel
            </button>
            <button 
              class="primary-button" 
              @click.stop=""
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
