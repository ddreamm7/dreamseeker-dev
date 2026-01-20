<script setup>
  import { onMounted, ref, onUnmounted } from 'vue';
  import { useHeroBackground } from '@/composables/use-hero-background.js';

  const canvasRef = ref(null);
  const { drawCanvas, stopCanvas } = useHeroBackground(canvasRef);

  onMounted(() => {
    drawCanvas();
  });

  onUnmounted(() => {
    stopCanvas();
  });
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 -z-10" />
</template>
