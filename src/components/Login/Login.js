import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Login() {
    return (
        <div className="login">
            <SignIn />
            <SignUp />
        </div>
    )
}
