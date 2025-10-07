<script setup>
  import { useI18n } from 'vue-i18n';
  import { technologies } from '@/constants/technologies.js';

  const { t } = useI18n();
</script>

<template>
  <section
    id="technologies"
    data-scroll-section
    class="flex flex-col justify-center gap-y-12"
  >
    <h2 class="text-6xl font-bold underline underline-offset-16">
      {{ t('technologies.title') }}
    </h2>
    <div class="grid grid-cols-1 gap-12 xl:grid-cols-3">
      <div
        v-for="(tech, key) in technologies"
        :key="`category-${key}`"
        class="flex flex-col gap-y-8 rounded-md border-2 border-white/20 bg-white/10 py-8 transition hover:border-white"
      >
        <div class="text-center text-2xl font-bold">
          <p>{{ t(`technologies.category.${key}`) }}</p>
        </div>
        <div
          :class="[
            'grid',
            tech.columns === 2 && 'grid-cols-2',
            tech.columns === 3 && 'grid-cols-3',
          ]"
        >
          <div
            v-for="(item, key) in tech.items"
            :key="`item-${key}`"
            class="flex items-center justify-center"
          >
            <a
              :href="item.link"
              class="flex flex-col items-center justify-center transition-all hover:drop-shadow-[0_0_4px_white]"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i :class="['text-6xl', item.icon]" />
              <p class="mt-2 text-center text-lg">
                {{ item.title }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
