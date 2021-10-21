import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap" // js part?

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import {
//     BootstrapVue,
//     IconsPlugin
// } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// .use(BootstrapVue).use(IconsPlugin)


createApp(App).use(store).use(router).mount('#app');
