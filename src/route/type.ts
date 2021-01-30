export interface IRenderParams {
    routes: Array<Object>,
    authed: boolean,
    authPath: string,
    extraProps?: object,
    switchProps?: object
}

export interface IRouteConfig{
    path:string,
    component:React.ElementType,
    requiresAuth:boolean,
    zIndex?:number,
    key?:any,
    exact?:boolean,
    strict?:boolean
}