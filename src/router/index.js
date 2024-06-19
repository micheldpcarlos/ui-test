import { createRouter, createWebHistory } from 'vue-router';
import PreviousRulingsView from '../views/PreviousRulingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home View',
      component: PreviousRulingsView
    },
  ]
});

export default router;
