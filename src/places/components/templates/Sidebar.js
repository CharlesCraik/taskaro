import React from "react";
import { supabase } from "../../../supabase";

import logo from '../../../media/file.png';
import MainMenu from "../util/MainMenu";
import { Logout } from 'iconsax-react';

const Sidebar = props => {
    const page = props.page;
    const SB_SignOut = async() => {
        const { error } = await supabase.auth.signOut();
        localStorage.setItem('User', '');
        console.log('Signing out...');
        window.location.href = '/';
    }

    return(
        <header className="sidebar">
            <div className="sidebar-logo-container">
                <img src={logo} />
            </div>
            <div className="navigation-wrap col">
                <nav className="main-nav-container main-menu-container">
                    <MainMenu page={page}/> 
                </nav>
                <div className="sidebar-bottom-container">
                    <span className="menu-link row align-c" id="signOut" onClick={SB_SignOut}>
                        <Logout color="#d9d9d9" variant="Outline"/>
                        Sign Out
                    </span>
                    <div className="view-mode-switch-container">
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Sidebar;