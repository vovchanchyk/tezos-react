import { Primary } from "./../pages/Primary";
import { Competition } from "./../pages/Competition";
import { Target } from "./../pages/Target";
import { Team } from "./../pages/Team";
import { Mission } from "./../pages/Mission";
import { Home } from "./../pages/Home";
import { Company } from "./../pages/Company";
import { Strategy } from "./../pages/Strategy";
import { Difference } from "./../pages/Difference";
import { Introducing } from "./../pages/Introducing";

const routes = [
    {
        path:'/home',
        component : Home,
    },
    {
        path:'/company',
        component : Company,
    },
    {
        path:'/team',
        component : Team,
    },
    {
        path:'/mission',
        component : Mission,
    },
    {
        path:'/target',
        component : Target,
    },
    {
        path:'/strategy',
        component : Strategy,
    },
    {
        path:'/primary',
        component : Primary,
    },
    {
        path:'/competition',
        component : Competition,
    },
    {
        path:'/difference-bg',
        component : Difference,
    },
    // {
    //     path:'/differense-primary',
    //     component : Difference,
    // },
    // {
    //     path:'/differense-light',
    //     component : Difference,
    // },
     {
         path:'/introducing',
        component : Introducing,
     },
];

export default routes;