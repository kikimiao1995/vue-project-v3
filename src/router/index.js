import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    alias: '/home', // 路由別名
    name: 'Home',
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: () => import( /* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: "/class",
    name: "Class",
    component: () => import( /* webpackChunkName: "class" */ '../views/Class.vue')
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import( /* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: "/menber",
    name: "Menber",
    component: () => import( /* webpackChunkName: "menber" */ '../views/Menber.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products/:productId',
    name: 'ProductCard.show',
    component: () => import('../views/ProductCardShow.vue'),
    // vue 允許將$route.params視為props使用
    // 1. 在 routes 上加上 props 屬性，
    // 2. 在元件內上的 props中，加上屬性，如這裡的 ProductCardShow.vue 加上 productId
    props: route => ({
      ...route.params,
      productId: parseInt(route.params.productId) 
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
