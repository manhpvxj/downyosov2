import { Home, Login, Register, Profile, HomeLayout, UserLayout, EditProfile } from "../views/index"
 
const isLoggedin = localStorage.getItem("token");
const publicRouter = [
    {
        path: "/login", component: Login, layout: HomeLayout,
    },
    {
        path: "/Register", component: Register, layout: HomeLayout,
    },
    {
        path: "/u/:user", component: Profile, layout: isLoggedin ? UserLayout : HomeLayout,
    },
    {
        path: "/u/:user/edit", component: EditProfile, layout: UserLayout,
    },
    {
        path: "/", component: Home, layout: HomeLayout,
    },
];

const privateRouter = [];

export { publicRouter, privateRouter};
