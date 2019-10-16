import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase/firebase.utils';

export default function Navbar({currentUser}) {
    return (
        <nav className="navbar">
            <Link className="logo-container" to="/"><Logo className="logo"/></Link>
            <div className="menu">
                <Link className="option" to="/">HOME</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/login">SIGN IN</Link>
                }
            </div>
        </nav>
    )
}
