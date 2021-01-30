export interface IActionType{
    type:string,
    payload?:any
}

export interface ILoginState{
    isLogin:boolean,
    userInfo?:object
}