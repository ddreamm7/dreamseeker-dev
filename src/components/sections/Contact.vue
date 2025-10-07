<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <div
    id="contact"
    data-scroll-section="last-section"
    class="flex flex-col justify-center gap-y-24"
  >
    <div class="flex flex-col items-center gap-y-8 text-5xl">
      <p>{{ t('built_with.title') }}</p>
      <div class="flex gap-x-24">
        <a
          href="https://www.vite.dev"
          class="relative flex items-center gap-x-2 text-white after:absolute after:-bottom-4 after:left-0 after:h-2 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Vite</span>
          <i class="devicon-vitejs-plain" />
        </a>
        <a
          href="https://vuejs.org/"
          class="relative flex items-center gap-x-2 text-white after:absolute after:-bottom-4 after:left-0 after:h-2 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Vue.js</span>
          <i class="devicon-vuejs-plain" />
        </a>
        <a
          href="https://tailwindcss.com/"
          class="relative flex items-center gap-x-2 text-white after:absolute after:-bottom-4 after:left-0 after:h-2 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>TailwindCSS</span>
          <i class="devicon-tailwindcss-plain" />
        </a>
        <a
          href="https://www.gsap.com/"
          rel="noopener noreferrer"
          target="_blank"
          class="relative text-white after:absolute after:-bottom-4 after:left-0 after:h-2 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          <span>GSAP</span>
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center gap-y-2 text-xl">
      <div class="flex gap-x-2">
        <p>{{ t('built_with.devicon.description') }}</p>
        <a
          class="flex items-center gap-x-2"
          href="https://devicon.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Devicon</span>
          <i class="devicon-devicon-plain" />
        </a>
      </div>
      <p class="text-white/50">
        {{ t('built_with.devicon.copyright') }}
      </p>
    </div>
  </div>
</template>
