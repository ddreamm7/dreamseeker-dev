<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <footer>
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
