<script setup>
  import { computed, onMounted, ref } from 'vue';
  import { gsap } from 'gsap';
  import {
    MenuIcon,
    LucideX,
    LucideStar,
    Languages,
    ChevronDown,
    ChevronUp,
    Download,
    SquareUserRound,
    Layers,
    FolderCode,
    Search,
  } from 'lucide-vue-next';

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 20,
    },
  });

  const iconMap = {
    MenuIcon,
    LucideX,
    LucideStar,
    Languages,
    ChevronDown,
    ChevronUp,
    Download,
    SquareUserRound,
    Layers,
    FolderCode,
    Search,
  };

  const icon = computed(() => iconMap[props.name]);

  const iconRef = ref(null);

  onMounted(() => {
    if (iconRef.value) {
      gsap.from(iconRef.value, {
        opacity: 0.5,
        duration: 0.5,
        ease: 'power4',
      });
    }
  });
</script>

<template>
  <span ref="iconRef" class="inline-block">
    <component :is="icon" :size="size" />
  </span>
</template>
