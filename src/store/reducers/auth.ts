import { IActionType } from '../type';
import { LOGIN, LOGOUT } from '../ActionTypes';

const initState = {
    isLogin: false,
    userInfo: {}
}

export default function auth (state = initState, action: IActionType) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { isLogin: true });
        case LOGOUT:
            return Object.assign({}, state, { isLogin: false });
        default:
            return {...state};
    }
}