import Vue from 'vue'
import Router from 'vue-router'

import Home from "./components/Home.vue"
import Menu from "./components/Menu.vue"
//lazy loading component: const Menu = () => import("./components/Menu.vue")
import About from "./components/About.vue"
//lazy loading group: const About = () => import(/* webpackChunkName: "footer-group" */ "./components/About.vue")
import Contact from "./components/Contact.vue"
import Delivery from "./components/Delivery.vue"
import History from "./components/History.vue"
import OrderingGuide from "./components/OrderingGuide.vue"
import Admin from "./components/Admin.vue"
//lazy loading group: const Admin = () => import(/* webpackChunkName: "footer-group" */ "./components/Admin.vue")


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: "/", 
        name: "homeLink", 
        components: {
            default: Home,
            "ordering-guide": OrderingGuide,
            "delivery": Delivery,
            "history": History
        }},
    {path: "/menu", name: "menuLink", component: Menu},
    {path: "/admin", name: "adminLink", component: Admin, beforeEnter: (to, from, next) => {
      alert("Dette området er kun for godkjente brukere. Vennligst logg inn for å fortsette.");
      next();
    }},
    {path: "/about", name: "aboutLink", component: About, children: [
      {path: "/contact", name: "contactLink", component: Contact},
      {path: "/history", name: "historyLink", component: History},
      {path: "/delivery", name: "deliveryLink", component: Delivery},
      {path: "/ordering-guide", name: "orderingGuideLink", component: OrderingGuide}
    ]},
    {path: "*", redirect: "/"}
  ]
})
