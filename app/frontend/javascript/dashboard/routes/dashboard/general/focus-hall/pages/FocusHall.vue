<script setup>
import motivationalQuotes from "../data/quotes";
import SessionSetupCard from "../components/SessionSetupCard.vue";

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
    <div>
      <SessionSetupCard />
    </div>
  </div>
</template>
