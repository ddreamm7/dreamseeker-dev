import { createApp } from 'vue';
import { useScrollSmoother } from '@/composables/useScrollSmoother';
import { i18n } from '@/locales/i18n.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import App from '@/core/App.vue';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import '@/core/main.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

createApp(Header).use(i18n).mount('#fixed-header');
createApp(App).use(i18n).mount('#app');
createApp(Footer).use(i18n).mount('#fixed-footer');

useScrollSmoother();
