<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
import { hideAllPoppers } from 'floating-vue'

const dropdownModal = ref(null);
const searchQuery = ref('');
const activities = ref([]);
const projects = ref([]);
const selectedObject = ref('');

const isNewActivity = computed(() => {
  const matchActivities = activities.value.filter((activity) => activity.includes(searchQuery.value))
  return searchQuery.value.trim() !== '' && matchActivities.length === 0
})

const addNewActivity = () => {
  selectedObject.value = searchQuery.value;
  hideAllPoppers();
}

</script>
<template>
  <VDropdown :distance="6">
    <button class="group-[.dropdown-open]:bg-neutral-200/50 hover:bg-neutral-200/50 rounded-md flex items-center px-2 py-1 gap-1 font-medium text-sm text-neutral-700 cursor-pointer">
      <Icon icon="tabler:message-chatbot" class="w-5 h-5" />
      <span class="max-w-32 truncate">{{ selectedObject || 'Activity' }}</span>
      <Icon icon="tabler:caret-down-filled" class="w-3 h-3" />
    </button>
    <template #popper>
      <div class="p-2">
        <form>
          <input 
            v-model='searchQuery'
            class="border-2 border-neutral-200 rounded-md p-2 text-sm"
            type="text"
            placeholder="Type an activity name"
          />
        </form>
        <div v-if="isNewActivity" class="w-64">
          <span class="text-neutral-500 text-sm inline-block my-2">Activity not found</span>
          <button 
            @click="addNewActivity"
            class="hover:bg-sky-100/75 text-sky-700 rounded-md p-2 text-xs text-left font-medium wrap-anywhere w-full cursor-pointer flex items-center gap-1">
            <Icon icon="tabler:plus" class="w-4 h-4" />
            <span class="flex-1">
              <span>Create new activity</span>
              {{' '}}
              <span class="italic">"{{searchQuery}}"</span>
            </span>
          </button>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
