<script setup>
  import { onMounted, ref } from 'vue';
  import { useAnimateHero } from '@/composables/use-animate-hero.js';
  import { useI18n } from 'vue-i18n';
  import LucideIcon from '@/components/widgets/LucideIcon.vue';
  import HeroBackground from '@/components/widgets/HeroBackground.vue';
  import { useResumeFile } from '@/composables/use-resume-file.js';

  const { t } = useI18n();

  const logoRef = ref(null);
  const buttonRef = ref(null);

  const { animateHero } = useAnimateHero(logoRef, buttonRef);
  const { resumeFile } = useResumeFile();

  onMounted(() => {
    animateHero();
  });
</script>

<template>
  <section class="default-section">
    <HeroBackground />
    <div class="flex h-screen flex-col items-center justify-center gap-y-12">
      <div ref="logoRef">
        <img src="@/assets/images/branding/dreamspace-logo.webp" alt="dreamspace_logo" />
        <p class="text-center text-xl">
          {{ t('hero.role') }}
        </p>
      </div>
      <a :href="resumeFile" download="CV-JOSE-ALONSO-PUMAJULCA-GARCIA" class="interactive-button" ref="buttonRef">
        {{ t('hero.resume') }}
        <LucideIcon name="Heart" />
      </a>
    </div>
  </section>
</template>
