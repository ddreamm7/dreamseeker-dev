import Hero from '@/components/Hero.vue';
import Profile from '@/components/Profile.vue';
import Technologies from '@/components/Technologies.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

export const sections = [
  { name: 'home', id: 'hero', component: Hero },
  { name: 'profile', id: 'profile', component: Profile },
  { name: 'technologies', id: 'technologies', component: Technologies },
  { name: 'projects', id: 'projects', component: Projects },
  { name: 'contact', id: 'contact', component: Contact },
];
