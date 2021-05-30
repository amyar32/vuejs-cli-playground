import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UserList from './pages/UsersList.vue';
import TeamFooter from './pages/TeamFooter.vue';

const router = createRouter({
  // ada dua jenis history
  history: createWebHistory(),

  // tell/regist router what component to be routed
  routes: [
    { path: '/', redirect: '/teams' },
    // atau pake alias
    {
      name: 'teams',
      path: '/teams',

      //META HERE
      // bisa di akses di global nav guard (to.meta.needAuth)
      meta: { needAuth: true },
      // rendering multiple routes
      // ada di app.vue <router-view name="footer">
      components: { default: TeamsList, footer: TeamFooter },
      // alias: '/',
      // nested routes
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      component: UserList,
      // nav guard
      // bisa juga secara explisit di komponen, contoh ada di komponen UsersList.vue
      beforeEnter(to, from, next) {
        console.log('users beforeenter');
        console.log(to, from);
        next();
      }
    },
    //:teamId disebut dynamic segment
    // dengan menambahkan opsi props:true, mmaka paramater bisa dipakai sebagai data
    // dengan nama teamId di component nya
    // singkatnya "passing params as props"

    // catchall unamed url
    { path: '/:notFound(.*)', redirect: '/teams' }
  ],
  // linkActiveClass: 'active' ==> rename active class css yang dipake router. default : router-link-active

  // scrollBehavior = called by vue router whenever your page vhanges
  // underscore parameter mengartikan kita g pakai arg tsb, tp cmn mau yang ketiganya aja
  scrollBehavior(_, _2, savedPosition) {
    // savedPosition . backbutton

    // harus return object wheres the browser scroll to
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

// a function as arguemtn
// function akan dipanggil ketika navigasi ke yang lain
// run every navigation action
// router.beforeEach((to, from, next) => {
//   console.log(to, from);
//   // we can cancel navigation like bcs not authenticated
//   // if you next, u allow the navigation next(true) atau next(false) atau next({'route config object tea ning'})
//   if (to.name === 'team-members') {
//     next();
//   } else {
//     next({ name: 'team-members', params: { teamId: 't2' } });
//   }
// });

// router.afterEach(function(to, from) {
//   // sending analytics data
// });

export default router;
