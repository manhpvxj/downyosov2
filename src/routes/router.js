import { Home, Login, Register, Profile, HomeLayout, UserLayout } from "../views/index"
 
const publicRouter = [
    {
        path: "/login", component: Login, layout: HomeLayout,
    },
    {
        path: "/Register", component: Register, layout: HomeLayout,
    },
    {
        path: "/u/:user", component: Profile, layout: UserLayout,
    },
    {
        path: "/", component: Home, layout: HomeLayout,
    },
];

const privateRouter = [];

export { publicRouter, privateRouter};
