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
  "https://i.imgur.com/n0sCq26.png",
  "https://i.imgur.com/pNoxExA.png",
  "https://i.imgur.com/gPHh829.png",
  "https://i.imgur.com/v61OOeJ.png",
  "https://i.imgur.com/uSdLt4X.png",
  "https://i.imgur.com/SyBoQac.png",
  "https://i.imgur.com/aA66vq4.png",
  "https://i.imgur.com/th9JiRV.png",
  "https://i.imgur.com/MS6rrpJ.png",
  "https://i.imgur.com/wOf8S6n.png",
]);


</script>

<style></style>