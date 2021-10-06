import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
