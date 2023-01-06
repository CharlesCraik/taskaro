import React, { useEffect } from "react";
import { GetUser } from "../../../supabase";

import Sidebar from "../../components/templates/Sidebar";
import AppHeader from "../../components/util/AppHeader";
import SettingsMenu from "../../components/util/SettingsMenu";

import AppearanceSettings from "../../components/templates/settings/AppearanceSettings";

const Settings = () => {
    // useEffect(() => {
    //     GetUser();
    //     console.log('Account connected')
    // }, [])

    return(
        <section className="main-content app-viewport row">
            <Sidebar page='settings'/>
            <div className="app-body col">
                <AppHeader />
                <div className="content-area">
                    <h1>Settings</h1>
                    <div className="settings-menu-container">
                        <SettingsMenu />
                    </div>
                    <div className="settings-container">
                        <AppearanceSettings />
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Settings;