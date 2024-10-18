<template>


<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96">
         <!-- Item 1 -->
        <div v-for="image in images" class="hidden duration-700 ease-in-out" data-carousel-item>
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
</div>

</template>

<script lang="ts" setup>
const images = ref([
  "https://i.imgur.com/GEov7Aa.png",
  "https://i.imgur.com/HrWMiOY.png",
  "https://i.imgur.com/3hKWNvF.png",
  "https://i.imgur.com/XKRgXFO.png",
  "https://i.imgur.com/WnEWeCU.png",
  "https://i.imgur.com/IPeiBbN.png",
  "https://i.imgur.com/kxFDsqU.png",
  "https://i.imgur.com/1GEV0C5.png",
  "https://i.imgur.com/SPfhWoS.png",
  "https://i.imgur.com/PUdMcXw.png",
]);


</script>

<style></style>