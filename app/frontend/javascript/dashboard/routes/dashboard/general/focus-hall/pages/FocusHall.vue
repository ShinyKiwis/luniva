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
    <div class="flex gap-8 flex-1">
      <div class="flex flex-col gap-4">
        <SessionSetupCard />
        <ReportCard />
      </div>
      <div class="aspect-video w-full bg-cover bg-center rounded-xl" :style="{ backgroundImage: `url('/images/wallpaper_1.jpeg')`}">
      </div>
    </div>
  </div>
</template>
