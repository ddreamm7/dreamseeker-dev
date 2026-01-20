<script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <footer
    class="bg-base border-t-default/25 flex h-48 items-center justify-between gap-4 border-t-2 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-48"
  >
    <p>
      {{ t('footer.copyright') }}
    </p>
    <p>
      {{ t('footer.icons_provided_by') }}
      <a
        class="font-bold underline-offset-4 hover:underline"
        href="https://icons8.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Icons8
      </a>
      &
      <a
        class="font-bold underline-offset-4 hover:underline"
        href="https://devicon.dev/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Devicon
      </a>
    </p>
  </footer>
</template>
