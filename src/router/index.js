import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isNavShow: true,
            isMiniPlayerShow: true,
            isTopShow: true,
            keepAlive: false,
        }
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: () => import('../views/Mine.vue'),
        meta: {
            isNavShow: true,
            isMiniPlayerShow: true,
            isTopShow: true,
            keepAlive: true,
        }
    },
    {
        path: '/daily-remd-list',
        name: 'DailyRemdList',
        component: () => import('../views/DailyRemdList.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: true,
            isTopShow: false,
            keepAlive: false,
        }
    },
    {
        path: '/playlist-plaza',
        name: 'PlaylistPlaza',
        component: () => import('../views/PlaylistPlaza.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: true,
            isTopShow: false,
            keepAlive: false,
        }
    },
    {
        path: '/tags',
        name: 'Tags',
        component: () => import('../views/Tags.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: true,
            isTopShow: false,
            keepAlive: false,
        }
    },
    {
        path: '/list/:id/:type',
        name: 'List',
        component: () => import('../views/List.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: true,
            keepAlive: false,
        }

    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: false,
            isTopShow: false,
        }
    },
    {
        path: '/player',
        name: 'Player',
        component: () => import('../views/Player.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: false,
            keepAlive: true,
        }
    },
    {
        path: '/comment/:id/:type',
        name: 'Comment',
        component: () => import('../views/Comment.vue'),
        meta: {
            isNavShow: false,
            isMiniPlayerShow: false,
            keepAlive: false,
        }
    }


]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router