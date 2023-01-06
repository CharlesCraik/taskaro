import React from "react";

import logo from '../../../media/file.png';

import CreateAccountForm from "../../components/forms/auth/CreateAccountForm";

const SignUp = () => {

    return(
        <section className="auth main-content row">
           <div className="col-1 col align-c just-c">
                <div className="auth-form-wrap">
                    <div className="auth-form-header col align-c">
                        <div className="logo-container">
                            <img src={logo} />
                        </div>
                        <div className="auth-form-details col align-c">
                            <h1>Sign Up</h1>
                            <span className="subtitle">Already have an account? 
                                <a href="/" className="auth-link"> Sign in</a>
                            </span>
                        </div>
                    </div>
                    <div className="auth-form-body">
                        <CreateAccountForm />
                    </div>
                </div>
            </div>
            <div className="col-2">
                
            </div> 
        </section>
    );
}

export default SignUp;