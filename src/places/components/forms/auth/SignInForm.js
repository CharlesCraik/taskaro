import React, { useState } from "react";
import { supabase, GetUser } from '../../../../supabase';

import '../Forms.css'

const SignInForm = () => {
    const [user_email, setUser_email] = useState('');
    const [user_password, setUser_password] = useState('');

    const signUserInHandler = (event) => {
        event.preventDefault();
        
        const thisUser = {
            email: user_email,
            password: user_password
        };

        SB_SignIn(thisUser);

    };

    const SB_SignIn = async (thisUser) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: thisUser.email,
            password: thisUser.password,
        });
        window.location.href = "/dashboard";
    }

    return(
        <div className="form-container">
            <form id="signUserInForm" className="auth-form" onSubmit={signUserInHandler}>
                <div className="field-container">
                    <input type='email' className='light-input' id="userEmail" placeholder="Email" onChange={(e) => setUser_email(e.target.value)}/>
                </div>
                <div className="field-container">
                    <input type='password' className='light-input' id="userPassword" placeholder="Password" onChange={(e) => setUser_password(e.target.value)}/>
                </div>
                <div className="action-container">
                    <button className="BTN primary" id="userSignIn" type="submit">Sign In</button>
                </div>
            </form>
            <a href='#' className="sub-link" id="forgotPassword">Forgot Password</a>
        </div>
    );
}

export default SignInForm;