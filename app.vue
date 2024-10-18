<template>
  <NuxtPage class="light" />
</template>
<style>
@font-face {
  font-family: Harman Sans;
  src: url("~/assets/fonts/Harman-Sans.otf") format('opentype'),
    url("~/assets/fonts/Harman-Sans.woff2") format('woff2'),
    url("~/assets/fonts/Harman-Sans.ttf") format('truetype'),
    url("~/assets/fonts/Harman-Sans.woff") format('woff');
}
</style>

<script setup>
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initAccordions();
        initCarousels();
        initCollapses();
        initDials();
        initDismisses();
        initDrawers();
        initDropdowns();
        initModals();
        initPopovers();
        initTabs();
        initTooltips();
    })
})

useHead({
  script: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "clackykeebs.com"
    },
  ],
});
</script>