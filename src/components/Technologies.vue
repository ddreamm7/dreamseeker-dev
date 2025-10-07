<script setup>
  import { useI18n } from 'vue-i18n';
  import { technologies } from '@/constants/technologies.js';

  const { t } = useI18n();
</script>

<template>
  <section
    id="technologies"
    class="bg-section-technologies"
    data-scroll="middle-section"
  >
    <article>
      <h1>{{ t('technologies.heading') }}</h1>
      <div class="grid w-full grid-cols-1 gap-12 xl:grid-cols-3">
        <div
          v-for="(tech, key) in technologies"
          :key="`category-${key}`"
          class="flex flex-col gap-y-8 rounded-md bg-white/10 py-8 transition hover:border-white"
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
                :href="item.generic"
                class="z-20 flex cursor-pointer flex-col items-center justify-center transition-all hover:drop-shadow-[0_0_4px_white]"
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
    </article>
  </section>
</template>
