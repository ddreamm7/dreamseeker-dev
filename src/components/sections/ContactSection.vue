<script setup>
  import { useI18n } from 'vue-i18n';
  import { socials } from '@/constants/socials.js';
  const { t } = useI18n();
</script>

<template>
  <section class="default-section">
    <h1>{{ t('contact.heading') }}</h1>
    <ul class="flex gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
      <li v-for="(link, key) in socials" :key="key">
        <a :href="link.href" :title="link.title" rel="noopener noreferrer" target="_blank">
          <img :alt="link.alt" :src="link.icon" class="size-6" />
        </a>
      </li>
    </ul>
    <div class="flex items-center gap-x-4">
      <div class="flex gap-x-2">
        <p>{{ t('contact.developed_with') }}</p>
        <div class="flex gap-x-2">
          <a
            href="https://www.vite.dev"
            class="underline-offset-4 hover:font-bold hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Vite</span>
            <i class="devicon-vitejs-plain" />
          </a>
          <a
            href="https://vuejs.org/"
            class="underline-offset-4 hover:font-bold hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Vue.js</span>
            <i class="devicon-vuejs-plain" />
          </a>
          <a
            href="https://tailwindcss.com/"
            class="underline-offset-4 hover:font-bold hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>TailwindCSS</span>
            <i class="devicon-tailwindcss-plain" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
