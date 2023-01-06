import React from "react";

const SettingsMenu = () => {
    
    const SelectTab = (selectTab) => {
        const settingTabs = document.querySelectorAll('span.setting');
        settingTabs.forEach(function(tab){
            if(tab.classList.contains('active')){
                tab.classList.remove('active');
            }

            selectTab.classList.add('active');
        })
    }

    return(
    <ul className="settings-menu row" id="settingsMenu">
        <li className="tab-item settings-item">
            <span className="setting active" id="accountSettings" onClick={(e) => SelectTab(e.target)}>
                Account
            </span>
        </li>
        <li className="tab-item settings-item">
            <span className="setting" id="teamSettings" onClick={(e) => SelectTab(e.target)}>
                Team
            </span>
        </li>
        <li className="tab-item settings-item">
            <span className="setting" id="appearanceSettings" onClick={(e) => SelectTab(e.target)}>
                Appearance
            </span>
        </li>
        <li className="tab-item settings-item">
            <span className="setting" id="notificationSettings" onClick={(e) => SelectTab(e.target)}>
                Notifications
            </span>
        </li>
    </ul>
    );
}

export default SettingsMenu;