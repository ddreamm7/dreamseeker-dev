<script setup>
  import { onMounted, ref } from 'vue';
  import { useAnimateHero } from '@/composables/use-animate-hero.js';
  import { useI18n } from 'vue-i18n';
  import LucideIcon from '@/components/base/LucideIcon.vue';
  import HeroBackground from '@/components/widgets/HeroBackground.vue';

  const { t } = useI18n();

  const titleRef = ref(null);
  const buttonRef = ref(null);

  const { animateHero } = useAnimateHero(titleRef, buttonRef);

  onMounted(() => {
    animateHero();
  });
</script>

<template>
  <section class="default-section">
    <HeroBackground />
    <div class="flex h-screen flex-col items-center justify-center gap-y-20 text-center">
      <h1 ref="titleRef" class="text-8xl">
        {{ t('hero.heading') }}
      </h1>
      <button ref="buttonRef" class="interactive-button">
        <a href="/public"> Download CV </a>
        <LucideIcon name="Download" />
      </button>
    </div>
  </section>
</template>
