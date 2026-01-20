<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <footer
    class="bg-primary border-t-default flex h-48 items-center justify-between gap-4 border-t-2 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48"
  >
    <div class="font-heading flex flex-col items-start gap-y-2 text-xl">
      <img
        src="@/assets/images/branding/dreamspace-logo.webp"
        alt="dreamspace_logo"
        class="h-16 w-auto object-contain"
      />
      <p>
        {{ t('footer.copyright') }}
      </p>
    </div>
    <div class="text-subtext flex flex-col items-end gap-y-2">
      <div class="flex gap-x-1">
        <p>{{ t('footer.built_with') }}</p>
        <div class="flex gap-x-2">
          <a
            href="https://www.vite.dev"
            class="space-x-1 hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Vite</span>
            <i class="devicon-vitejs-plain" />
          </a>
          |
          <a
            href="https://vuejs.org/"
            class="space-x-1 hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Vue.js</span>
            <i class="devicon-vuejs-plain" />
          </a>
          |
          <a
            href="https://tailwindcss.com/"
            class="space-x-1 hover:font-bold"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>TailwindCSS</span>
            <i class="devicon-tailwindcss-plain" />
          </a>
        </div>
      </div>
      <p>
        {{ t('footer.icons_provided_by') }}
        <a
          class="hover:font-bold"
          href="https://lucide.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Lucide
        </a>
        |
        <a
          class="hover:font-bold"
          href="https://devicon.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Devicon
        </a>
      </p>
      <p>
        {{ t('footer.developed_by') }}
        <span class="font-bold">ddreamm7 ♡</span>
      </p>
    </div>
  </footer>
</template>
