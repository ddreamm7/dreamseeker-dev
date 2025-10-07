<script setup>
  import { useI18n } from 'vue-i18n';
  import { icons } from '@/constants/icons.js';
  const { t } = useI18n();
</script>

<template>
  <section
    id="profile"
    data-scroll-section
    class="flex flex-col justify-center gap-y-12"
  >
    <h1 class="text-6xl font-bold underline underline-offset-16">
      {{ t('profile.heading') }}
    </h1>
    <div
      class="flex flex-col gap-y-4 rounded-md border-2 border-white/20 bg-white/10 p-12 text-white"
    >
      <h2 class="text-3xl lg:text-5xl">
        {{ t('profile.greeting') }}
      </h2>
      <p class="text-sm leading-loose lg:text-xl">
        {{ t('profile.description') }}
      </p>
      <a
        class="mt-8 flex w-full items-center justify-center gap-x-2 rounded-md border-2 border-white/10 bg-white/10 py-4 transition hover:border-white hover:bg-white/20 hover:font-bold md:w-auto md:px-4 lg:px-8 xl:px-12 2xl:px-16"
        download="cv.txt"
        href="/files/"
        rel="noopener noreferrer"
      >
        {{ t('profile.download') }}
        <img :src="icons.link" alt="link-icon" class="size-6" />
      </a>
    </div>
  </section>
</template>
