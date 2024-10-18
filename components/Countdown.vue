<template>
  <div class="flex flex-col min-[1060px]:flex-row gap-6 text-center font-harman text-white items-center">
    <div class="min-[1060px]:flex items-end">
      <div class="text-6xl md:text-8xl min-[1060px]:pr-2 main-text">
        {{ counting ? daysRef : days }}
      </div>
      <div class="min-[1060px]:pb-1 text-xl md:text-2xl">
        Dagen
      </div>
    </div>

    <div class="h-20 w-1 bg-primary-700 hidden sm:block"></div>
    <div class="h-1 w-20 bg-primary-700 block sm:hidden"></div>

    <div class="min-[1060px]:flex items-end">
      <div class="text-6xl md:text-8xl min-[1060px]:pr-2 main-text">
        {{ counting ? spotsRef : spots }}
      </div>
      <div class="min-[1060px]:pb-1 text-xl md:text-2xl">
        Plekken
      </div>
    </div>
  </div>
</template>
<style>
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.pulse-text {
  animation: pulse 2s infinite;
}

@keyframes heartbeat {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  10%,
  30% {
    transform: scale(1.1);
    opacity: 0.7;
  }

  20%,
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }

  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.heartbeat-text {
  position: relative;
  animation: heartbeat 1.5s infinite;
}

.heartbeat-text::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0.5;
  z-index: -1;
  animation: ripple 1.5s infinite;
}
</style>
<script setup>
import countdown from "~/assets/js/countdown";

countdown.CountDownTimer();

const days = computed(() => countdown.days.value == 0 ? daysRef.value : countdown.days.value);
const spots = computed(() => countdown.spots.value == 0 ? spotsRef.value : countdown.spots.value);

const daysRef = ref(0);
const spotsRef = ref(0);

const duration = 500;
const counting = ref(true);

const animateValue = (ref, start, end) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    ref.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

onMounted(() => {
  animateValue(daysRef, daysRef.value, days.value);
  animateValue(spotsRef, spotsRef.value, 10);
  setTimeout(() => {
    counting.value = false;
  }, duration)
})
</script>
