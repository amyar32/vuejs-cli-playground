import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UserList from './components/users/UsersList.vue';

const router = createRouter({
  // ada dua jenis history
  history: createWebHistory(),

  // tell/regist router what component to be routed
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UserList },
    //:teamId disebut dynamic segment
    // dengan menambahkan opsi props:true, mmaka paramater bisa dipakai sebagai data
    // dengan nama teamId di component nya
    { path: '/teams/:teamId', component: TeamMembers, props: true }
  ]
  // linkActiveClass: 'active' ==> rename active class css yang dipake router. default : router-link-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
