import React from 'react'
import Login from './Login';
import UserProfile from '../../pages/UserProfile';

const LoginForm = () => {

    function GetInformation() {
        return localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : []
    }

    const IsUserIsTrue = GetInformation()


    if (IsUserIsTrue.length > 0) {
        return <UserProfile />
    }

    return (
        <Login />
    )
}

export default LoginForm
