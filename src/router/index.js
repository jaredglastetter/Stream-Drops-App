// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        beforeEnter: (to, from, next) => {
          const store = useAuthStore()
          console.log('user type', store.user.broadcasterType)
          if (!store.user) {
            next();
          } else if (store.user.broadcasterType == "affiliate") {
            next({ name: 'CreatorDashboard' });
          } else {
            next({ name: 'UserDashboard' });
          }
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/creator-dashboard',
        name: 'CreatorDashboard',
        meta: {
          auth: true
        },
        component: () => import('@/views/CreatorDashboard.vue')
      },
      {
        path: '/user-dashboard',
        name: 'UserDashboard',
        meta: {
          auth: true
        },
        component: () => import('@/views/UserDashboard.vue')
      },
      {
        path: '/users',
        name: 'Users',
        meta: {
          auth: true
        },
        component: () => import('@/views/users/Creators.vue')
      },
      {
        path: '/user/:username',
        name: 'User',
        meta: {
          auth: true
        },
        component: () => import('@/views/users/View.vue')
      },
      {
        path: '/twitch-redirect',
        name: 'TwitchRedirect',
        component: () => import('@/views/TwitchRedirect.vue')
      },
      {
        path: '/rewards/create',
        name: 'RewardCreate',
        meta: {
          auth: true
        },
        component: () => import('@/views/rewards/Create.vue')
      },
      {
        path: '/rewards/:id',
        name: 'Reward',
        meta: {
          auth: true
        },
        component: () => import('@/views/rewards/View.vue')
      },
      {
        path: '/redemptions/:id',
        name: 'Redemption',
        meta: {
          auth: true
        },
        component: () => import('@/views/redemptions/View.vue')
      },
    ],
  },
]

const requireAuth = async (to, from, next) => {
  const store = useAuthStore()

  console.log(store.isAuthenticated)

  if (!store.isAuthenticated) {
    console.log('syncing user')
    await store.syncUser();
  }

  if (to.meta.auth && !store.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


router.beforeEach(requireAuth)

export default router
