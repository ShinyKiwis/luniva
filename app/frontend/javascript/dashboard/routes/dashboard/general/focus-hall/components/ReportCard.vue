<script setup>
import * as HeatmapRenderer from "gcharts/calendarHeatmap";
import DateHelper from "ghelpers/dateHelper";
import Card from "gcomponents/Card.vue";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";

const monthlySessions = ref([
  ['2025-06-01', 120],
  ['2025-06-02', 90],
  ['2025-06-03', 100],
  ['2025-06-04', 80],
  ['2025-06-05', 110],
  ['2025-06-06', 75],
  ['2025-06-07', 130],
  ['2025-06-08', 95],
  ['2025-06-09', 85],
]);
const heatMap = ref(null)
let chartInstance = null;

onMounted(() => {
  if(heatMap.value) {
    chartInstance = HeatmapRenderer.render(heatMap.value, monthlySessions.value);
  }

  watch(monthlySessions, (newData) => {
    if (chartInstance) {
      chartInstance.setOption({
        series: { data: newData }
      })
    }
  }, { deep: true })
});

onBeforeUnmount(() => {
  if(chartInstance) {
    chartInstance.dispose();
  }
});
</script>

<template>
  <Card class="w-96">
    <div class="px-4 py-2">
      <span class="text-base font-medium mb-2">
        {{ monthlySessions.length }} sessions in {{ DateHelper.currentMonth }}
      </span>
      <div ref="heatMap" class="w-full h-56 my-2" />
    </div>
  </Card>
</template>
