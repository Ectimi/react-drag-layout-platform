import {IRouteConfig} from './type';
import Login from '../pages/Login';
import Main from '../pages/Main';

const routesConfig:IRouteConfig[] = [
    {
        path:'/',
        component:Main,
        zIndex:1,
        requiresAuth:true
    },
    {
        path:'/login',
        component:Login,
        zIndex:0,
        requiresAuth:false
    }
]

export default routesConfig;