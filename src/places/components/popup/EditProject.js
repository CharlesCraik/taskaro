import React, { useState } from "react";

import { Folder2 } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import EditProjectForm from "../forms/creation/EditProjectForm";
import { ClosePopup } from "../../../scripts/public";

const EditProject = () => {
    return(
        <div className="popup-container edit-project-popup inactive" id="editProjectPopup">
            <div className="popup-header row spaced">
                <div className="popup-title-container row align-c">
                    <div className="action-icon-container">
                        <Folder2 size="28" color="#6ae08b" variant="Bold"/>
                    </div>
                    <h3>Edit Project</h3>
                </div>
                <span className="close-popup" id="closeEditProject" onClick={(e) => ClosePopup(document.querySelector('#editProjectPopup'))}>
                    <CloseCircle color="#ececec" variant="Outline"/>
                </span>
            </div>
            <div className="popup-body">
                <EditProjectForm />
            </div>
        </div>
    );
}

export default EditProject;