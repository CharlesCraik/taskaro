import React from "react";

import { Folder2 } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import CreateProjectForm from "../forms/creation/CreateProjectForm";
import { ClosePopup } from "../../../scripts/public";

const CreateProject = () => {    
    return(
        <div className="popup-container create-project-popup inactive" id="createProjectPopup">
            <div className="popup-header row spaced">
                <div className="popup-title-container row align-c">
                    <div className="action-icon-container">
                        <Folder2 size="28" color="#6ae08b" variant="Bold"/>
                    </div>
                    <h3>Create a New Project</h3>
                </div>
                <span className="close-popup" id="closeCreateProject" onClick={(e) => ClosePopup(document.querySelector('#createProjectPopup'))}>
                    <CloseCircle color="#ececec" variant="Outline"/>
                </span>
            </div>
            <div className="popup-body">
                <CreateProjectForm />
            </div>
        </div>
    );
}

export default CreateProject;