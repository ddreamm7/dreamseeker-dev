<script setup>
  import { useI18n } from 'vue-i18n';
  import LucideIcon from '@/components/base/LucideIcon.vue';

  const { t } = useI18n();
</script>

<template>
  <section class="default-section border-t-default border-t-8">
    <div class="flex items-center justify-start gap-x-6">
      <LucideIcon name="SquareUserRound" :size="60" />
      <h1>{{ t('profile.heading') }}</h1>
    </div>
    <div class="flex flex-col text-center">
      <p class="text-subtext text-xl font-bold sm:text-2xl md:text-3xl">
        {{ t('profile.greeting') }}
      </p>
      <p class="">
        {{ t('profile.description') }}
      </p>
    </div>
  </section>
</template>
