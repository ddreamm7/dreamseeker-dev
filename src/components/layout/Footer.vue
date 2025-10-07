<script setup>
  import { socials } from '@/constants/socials.js';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <footer
    class="fixed bottom-0 z-10 flex h-16 w-full flex-col items-center gap-y-4 px-8 sm:px-16 md:px-24 lg:flex-row-reverse lg:justify-between lg:px-32 xl:px-40 2xl:px-48"
  >
    <ul class="flex gap-x-8">
      <li v-for="(link, key) in socials" :key="key">
        <a
          :href="link.href"
          :title="link.title"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img :alt="link.alt" :src="link.icon" class="size-6" />
        </a>
      </li>
    </ul>
    <p class="text-center text-xs lg:text-sm">
      <span>DREAMSEEKER</span>
      {{ t('footer.copyright') }}
    </p>
  </footer>
</template>
