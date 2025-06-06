<script setup>
import Card from "gcomponents/Card.vue";
import { ref } from "vue";

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthlySessions = ref([]);
const d = new Date();
</script>
<template>
  <Card class="w-96">
    <div class="px-4 py-2">
      <span class="text-base font-medium mb-2">
        {{monthlySessions.length}} sessions in {{months[d.getMonth()]}}
      </span>
    </div>
  </Card>
</template>
