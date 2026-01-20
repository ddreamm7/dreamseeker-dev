<script setup>
  import { useI18n } from 'vue-i18n';
  import { technologies } from '@/constants/technologies.js';
  import LucideIcon from '@/components/widgets/LucideIcon.vue';

  const { t } = useI18n();
</script>

<template>
  <section class="default-section">
    <div class="border-b-default/50 w-full border-b-2 pb-24">
      <div class="flex items-center justify-end gap-x-6">
        <h1>{{ t('technologies.heading') }}</h1>
        <LucideIcon name="Layers" :size="60" />
      </div>
      <div class="flex flex-wrap justify-end gap-12">
        <div
          v-for="tech in technologies"
          :key="tech.id"
          class="default-card flex flex-col gap-y-4 p-4"
        >
          <p class="font-heading text-center text-lg">
            {{ t(`technologies.categories.${tech.id}`) }}
          </p>
          <div class="flex gap-x-4">
            <div v-for="item in tech.items" :key="item.title">
              <a
                :href="item.link"
                class="hover:bg-default hover:text-primary flex size-32 flex-col items-center justify-center gap-y-2 rounded-lg text-center transition-colors duration-200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i :class="['text-6xl', item.icon]" />
                <p>{{ item.title }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
