<script setup>
import motivationalQuotes from "../data/quotes";
import SessionSetupCard from "../components/SessionSetupCard.vue";
import ReportCard from "../components/ReportCard.vue";

const randomQuote = (() => {
  const length = motivationalQuotes.length;
  return motivationalQuotes[Math.floor(Math.random() * length)];
})();
</script>

<template>
  <div class="min-h-screen p-8 flex flex-col gap-4">
    <h2>Focus Hall</h2>
    <span class="text-sm text-gray-500">
      <span>{{ randomQuote.quote }}</span>
      <span class="italic">{{ ` - ${randomQuote.author || 'Anonymous'}` }}</span>
    </span>
    <div class="flex gap-4">
      <div class="flex flex-col gap-4">
        <SessionSetupCard />
        <ReportCard />
      </div>
      <div class="w-full">
        Main
      </div>
    </div>
  </div>
</template>
