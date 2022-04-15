import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home";
import About from "@/views/About";
import Description from "@/views/Description";
import DefaultLayout from "@/layout/DefaultLayout";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
            {
                path: "/about",
                name: "About",
                component: About,
            },
            {
                path: "/description/:id",
                name: "Description",
                component: Description,
            }
        ]
    }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;