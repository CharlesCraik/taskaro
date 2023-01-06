import React from "react";
import { supabase } from '../../../supabase';

import SignInForm from "../../components/forms/auth/SignInForm";
import logo from '../../../media/file.png';

const SignIn = () => {
    return(
        <section className="auth main-content row">
           <div className="col-1 col align-c just-c">
                <div className="auth-form-wrap">
                    <div className="auth-form-header col align-c">
                        <div className="logo-container">
                            <img src={logo} />
                        </div>
                        <div className="auth-form-details col align-c">
                            <h1>Sign In</h1>
                            <span className="subtitle">Don't own an account? 
                                <a href="/sign-up" className="auth-link"> Create an account</a>
                            </span>
                        </div>
                    </div>
                    <div className="auth-form-body">
                        <SignInForm />
                    </div>
                </div>
            </div>
            <div className="col-2">
                
            </div> 
        </section>
    );
}

export default SignIn;