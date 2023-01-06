import React from "react";
import { Profile } from 'iconsax-react';

const AppHeader = () => {
    return(
        <div className="app-header">
            <div className="options-container row align-c just-e">
                <span className="profile-shortcut-container" id="profileShortcut">
                    <Profile size="24" color="#262626" variant="Bold"/>
                </span>
            </div>
        </div>
    );
}

export default AppHeader;