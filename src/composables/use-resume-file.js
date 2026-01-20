import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useResumeFile() {
  const { locale } = useI18n();

  const resumeFile = computed(() => {
    switch (locale.value) {
      case 'en':
        return '/pdfs/CV-JOSE-ALONSO-PUMAJULCA-GARCIA-en.pdf';
      case 'es':
        return '/pdfs/CV-JOSE-ALONSO-PUMAJULCA-GARCIA-es.pdf';
      default:
        return '/pdfs/CV-JOSE-ALONSO-PUMAJULCA-GARCIA-en.pdf';
    }
  });

  return { resumeFile };
}
