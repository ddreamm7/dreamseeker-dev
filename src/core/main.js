import { createApp } from 'vue';
import { gsapSetup } from '@/plugins/gsap.js';
import { i18n } from '@/plugins/i18n.js';
import App from '@/core/App.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import '@/core/main.css';

createApp(Header).use(i18n).mount('#fixed-header');
createApp(App).use(i18n).mount('#app');
createApp(Footer).use(i18n).mount('#fixed-footer');

gsapSetup();
