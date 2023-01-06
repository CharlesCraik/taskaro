import React, { useState } from "react";

import { supabase } from '../../../../supabase';

import '../Forms.css'

const CreateAccountForm = () => {
    const [user_firstName, setUser_firstName] = useState('');
    const [user_lastName, setUser_lastName] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_mobile, setUser_Mobile] = useState('');
    const [user_password, setUser_password] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordFields = document.querySelectorAll('.password-field');
    var passwordCheckEngaged = false;
    
    const CreateUserAccountHandler = (event) => {
        event.preventDefault();
        let thisUser = {
            firstName: user_firstName,
            lastName: user_lastName,
            email: user_email,
            mobile: user_mobile,
            password: user_password,
            confirmPassword: confirmPassword,
        }

        if(thisUser.password == thisUser.confirmPassword){
            
            SB_CreateAccount(thisUser);
        }
        else{
            PasswordMismatch();
        }
    };

    const SB_CreateAccount = async (thisUser) => {
        passwordFields.forEach(function(field){
            field.classList.remove('no-match');
            const warningTexts = document.querySelectorAll('span.input-warning-text')
            warningTexts.forEach(function(i){
                i.remove();
            });
        });

        
        const { data, error } = await supabase.auth.signUp({
            email: thisUser.email,
            password: thisUser.password,
            options: {
                data: {
                    first_name: thisUser.firstName,
                    last_name: thisUser.lastName,
                    mobile: thisUser.mobile,
                }
            }
        });
        window.location.href = "/dashboard";
    };

    const PasswordMismatch = () => {
        if(passwordCheckEngaged == false){
            passwordFields.forEach(function(field){
                field.classList.add('no-match');
                
                const parent = field.closest('.field-container');
                const warningText = document.createElement('span');
                warningText.setAttribute('class', 'input-warning-text');
                warningText.innerHTML = "Passwords don't match";
                parent.append(warningText);
            }); 
            passwordCheckEngaged = true;
        }
    };

    const ResetPasswordField = (e) => {
        if(e.value == ''){
            passwordFields.forEach(function(field){
                field.classList.remove('no-match');
                const warningTexts = document.querySelectorAll('span.input-warning-text')
                
                warningTexts.forEach(function(i){
                    i.remove();
                });

                field.value = '';
            }); 
        }
    };

    return(
        <div className="form-container">
            <form id="createAccountForm" className="auth-form" onSubmit={CreateUserAccountHandler}>
                <div className="field-row name-container">
                    <div className="field-container">
                        <input type='text' className='light-input' id="userFirstName" placeholder="First Name" onChange={(e) => setUser_firstName(e.target.value)}/>
                    </div>
                    <div className="field-container">
                        <input type='text' className='light-input' id="userLastName" placeholder="Last Name" onChange={(e) => setUser_lastName(e.target.value)}/>
                    </div>
                </div>
                <div className="field-container">
                    <input type='email' className='light-input' id="userEmail" placeholder="Email" onChange={(e) => setUser_email(e.target.value)}/>
                </div>
                <div className="field-container">
                    <input type='tel' className='light-input' id="userMobile" placeholder="Mobile" onChange={(e) => setUser_Mobile(e.target.value)}/>
                </div>
                <div className="field-container password-container">
                    <input type='password' className='light-input password-field' id="userPassword" placeholder="Password" onChange={(e) => setUser_password(e.target.value)} onInput={(e) => ResetPasswordField(e.target)} />
                </div>
                <div className="field-container password-container">
                    <input type='password' className='light-input password-field' id="userConfirmPassword" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} onInput={(e) => ResetPasswordField(e.target)} />
                </div>
                <div className="action-container">
                    <button className="BTN primary" id="userCreateAccount" type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccountForm;