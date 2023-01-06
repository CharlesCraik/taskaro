import React, { useState } from "react";
import './Settings.css';

import { DarkModeSwitch } from "../../../../scripts/settings";

const AppearanceSettings = () => {
    console.log(localStorage.getItem('darkMode'));
    const [darkModeChecked, setDarkModeChecked] = useState(localStorage.getItem('darkMode') === 'true');

    const activate = () => {
        if(document.body.classList.contains('light')){
            setDarkModeChecked(false);
            return false;
        }
        else if(document.body.classList.contains('dark')){
            setDarkModeChecked(true);
            
        }
    }
    
    return(
        <div className="theme-settings col">
            <div className="settings-header">
                <h3>Appearance</h3>
                <p className="subtitle">Customise your workspace's aesthetics</p>
            </div>
            <div className="settings-body col">
                <div className="setting-container row align-c spaced">
                    <div className="setting-details">
                        <span className="setting-header">Dark Mode</span>
                        <p className="subtitle">Select how you would like your workspace to look</p>
                    </div>
                    <div className="toggle-container">
                        <label className="switch">
                            <input type="checkbox" checked={darkModeChecked} onChange={(e) => DarkModeSwitch(e.target)} onInput={activate}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppearanceSettings;