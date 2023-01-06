import React, { useState } from "react";

import { Notepad2 } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import { ClosePopup } from "../../../scripts/public";

import EditTaskForm from "../forms/creation/EditTaskForm";

const EditTask = (props) => {
    return(
        <div className="popup-container edit-task-popup inactive" id="editTaskPopup">
            <div className="popup-header row spaced">
                <div className="popup-title-container row align-c">
                    <div className="action-icon-container">
                        <Notepad2 size="28" color="#6ae08b" variant="Bold"/>
                    </div>
                    <h3>Edit Task</h3>
                </div>
                <span className="close-popup" id="closeCreateTask" onClick={(e) => ClosePopup(document.querySelector('#editTaskPopup'))}>
                    <CloseCircle color="#ececec" variant="Outline"/>
                </span>
            </div>
            <div className="popup-body">
                <EditTaskForm projects={props.projects} />
            </div>
        </div>
    );
}

export default EditTask;