// main.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from './views/Home.vue'; // Adjust the path based on your project structure

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home, // Ensure you import and set the correct component here
  },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
