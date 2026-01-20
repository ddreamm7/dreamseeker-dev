<script setup>
  import { useI18n } from 'vue-i18n';
  import { technologies } from '@/constants/technologies.js';
  import LucideIcon from '@/components/base/LucideIcon.vue';

  const { t } = useI18n();
</script>

<template>
  <section class="default-section">
    <div class="flex items-center justify-end gap-x-6">
      <h1>{{ t('technologies.heading') }}</h1>
      <LucideIcon name="Layers" :size="60" />
    </div>

    <div class="flex flex-wrap justify-center gap-12">
      <div
        v-for="tech in technologies"
        :key="tech.id"
        class="flex flex-col gap-y-4 bg-white/10 p-4 shadow"
      >
        <p class="text-center text-lg font-bold">
          {{ t(`technologies.categories.${tech.id}`) }}
        </p>
        <div class="flex">
          <div v-for="item in tech.items" :key="item.title">
            <a
              :href="item.link"
              class="flex min-w-32 flex-col items-center justify-center gap-y-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i :class="['text-5xl', item.icon]" />
              <p>{{ item.titleRef }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
