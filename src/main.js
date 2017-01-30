import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueMaterial from 'vue-material'
import AppComponents from './components'

import App from './App.vue'

import Stores from './stores'
import Pages from './pages'

import 'vue-material/dist/vue-material.css'
import 'material-design-icons-iconfont/dist/material-design-icons.scss'
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(AppComponents)

// const store = new Vuex.Store({
//     strict: true,
//     modules: {
//         // security: new Stores.Security(),
//         // bills: new Stores.Bills(),
//         // contacts: new Stores.Contacts()
//     }
// })

const routes = [
    {
        path: '/',
        component: Pages.Home,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    // store,
    router,
    render: h => h(App)
})
