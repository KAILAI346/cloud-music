import { createRouter,createWebHashHistory } from "vue-router";

const Home = () => import ("../components/home/Home");
const Discovery = () => import("../views/discovery/Discovery");
const Recommends = () => import("../views/recommends/Recommends");


const routes = [
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home,
        children:[
            { path:"",redirect:"/discovery"},
            { path:"/discovery",component: Discovery },
            { path:"/recommends",component: Recommends},

        ],
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;