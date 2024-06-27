import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/Login.vue';
import HelloWorld from './components/HelloWorld.vue';
import DashBoard from './components/dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
