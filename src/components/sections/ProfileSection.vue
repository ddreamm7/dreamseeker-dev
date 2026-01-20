<script setup>
  import { useI18n } from 'vue-i18n';
  import LucideIcon from '@/components/widgets/LucideIcon.vue';

  const { t } = useI18n();
</script>

<template>
  <section class="default-section border-t-default border-t-8">
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <div class="flex items-center justify-start gap-x-6">
        <LucideIcon name="UserRound" :size="60" />
        <h1>{{ t('profile.heading') }}</h1>
      </div>
      <div class="default-card flex flex-col p-8 text-center">
        <p class="text-lg">
          {{ t('profile.description') }}
        </p>
      </div>
    </div>
  </section>
</template>
