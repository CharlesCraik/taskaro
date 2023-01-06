import React from "react";
import { useLocation } from "react-router-dom";

import { Element4 } from 'iconsax-react';
import { Folder2 } from 'iconsax-react';
import { Notepad2 } from 'iconsax-react';
import { Calendar1 } from 'iconsax-react';
import { Setting2 } from 'iconsax-react';


const MainMenu = props => {
    return(
        <ul className="main-menu col" id="mainMenu">
            <li className="menu-item">
                <a className="menu-link row align-c" href="/dashboard" id="dashboardNavItem">
                    <Element4 size="24" color="#262626" variant="Bold"/>
                    Dashboard
                </a>
            </li>
            <li className="menu-item">
                <a className="menu-link row align-c" href="/projects" id="projectsNavItem">
                    <Folder2 color="#d9d9d9" variant="Bold"/>
                    Projects
                </a>
            </li>
            <li className="menu-item">
                <a className="menu-link row align-c" href="/tasks" id="tasksNavItem">
                    <Notepad2 color="#d9d9d9" variant="Bold"/>
                    Tasks
                </a>
            </li>
            <li className="menu-item">
                <a className="menu-link row align-c" href="/Calendar" id="calendarNavItem">
                    <Calendar1 color="#d9d9d9" variant="Bold"/>
                    Calendar
                </a>
            </li>
            <li className="menu-item">
                <a className="menu-link row align-c" href="/Settings" id="settingsNavItem">
                    <Setting2 color="#d9d9d9" variant="Bold"/>
                    Settings
                </a>
            </li>
        </ul>
    );
}

export default MainMenu;