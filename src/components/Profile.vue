<script setup>
  import { useI18n } from 'vue-i18n';
  import { icons } from '@/constants/icons.js';

  const { t } = useI18n();
</script>

<template>
  <section id="profile" class="bg-section-profile" data-scroll="middle-section">
    <article>
      <h1>{{ t('profile.heading') }}</h1>
      <div class="flex flex-col text-center">
        <p class="text-xl font-bold sm:text-2xl md:text-3xl">
          {{ t('profile.greeting') }}
        </p>
        <p class="">
          {{ t('profile.description') }}
        </p>
        <a
          class="mt-12 flex w-full items-center justify-center gap-x-2 rounded-md border border-white/10 bg-white/10 py-4 transition hover:border-white hover:bg-white/20 hover:font-bold"
          download="cv.txt"
          href="/files"
          rel="noopener noreferrer"
        >
          {{ t('profile.download') }}
          <img :src="icons.link" alt="link-icon" class="size-6" />
        </a>
      </div>
    </article>
  </section>
</template>
