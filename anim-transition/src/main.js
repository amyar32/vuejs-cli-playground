import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// import App from './App.vue';
import AppRoute from './AppRoute.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
});

// const app = createApp(App);
const app = createApp(AppRoute);

app.component('base-modal', BaseModal);

app.use(router);

// ketika route ready maka di mount
// karena vue mulai dengan empty component on route
router.isReady().then(function() {
  app.mount('#app');
});
