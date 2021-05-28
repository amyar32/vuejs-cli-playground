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
    // { path: '/', redirect: '/teams' }, atau pake alias
    {
      path: '/teams',
      component: TeamsList,
      alias: '/',
      // nested routes
      children: [{ path: ':teamId', component: TeamMembers, props: true }]
    },
    { path: '/users', component: UserList },
    //:teamId disebut dynamic segment
    // dengan menambahkan opsi props:true, mmaka paramater bisa dipakai sebagai data
    // dengan nama teamId di component nya
    // singkatnya "passing params as props"

    // catchall unamed url
    { path: '/:notFound(.*)', redirect: '/teams' }
  ]
  // linkActiveClass: 'active' ==> rename active class css yang dipake router. default : router-link-active
});

const app = createApp(App);

app.use(router);

app.mount('#app');
