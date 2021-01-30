// import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './index.less'
import {ILoginState} from '../../store/type'
import {login,logout} from '../../store/actions/auth'
import { connect } from 'react-redux';

interface IProps extends RouteComponentProps {
    isLogin:boolean,
    login:()=>void,
    logout:()=>void
}

const Login = (props:IProps)=>{
    function login(){
        props.login();
        props.history.push('/');
    }

    return (
        <div className="Login-Page">
            <button onClick={login}>login</button>
            <button onClick={props.logout}>logout</button>
            {props.isLogin ? 'login':'not login'}
        </div>
    )
}

const mapStateToProps = (state:ILoginState)=>({
    isLogin:state.isLogin
})

const mapDispatchToProps = {
    login,
    logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
