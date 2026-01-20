import { createApp } from 'vue';
import { setScrollSmoother } from '@/plugins/gsap.js';
import { i18n } from '@/plugins/i18n.js';
import App from '@/core/App.vue';
import '@/core/main.css';

createApp(App).use(i18n).mount('#app');

setScrollSmoother();
