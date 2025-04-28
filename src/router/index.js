import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FilmsView from '../views/FilmsView.vue';
import FilmsIdView from '../views/FilmsIdView.vue'; 

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/films', component: FilmsView },
  { path: '/filmsid', component: FilmsIdView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;