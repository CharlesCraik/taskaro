import React from "react";

import { Notepad2 } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import { ClosePopup } from "../../../scripts/public";
import CreateTaskForm from "../forms/creation/CreateTaskForm";

const CreateTask = (props) => { 
    
    return(
        <div className="popup-container create-task-popup inactive" id="createTaskPopup">
            <div className="popup-header row spaced">
                <div className="popup-title-container row align-c">
                    <div className="action-icon-container">
                        <Notepad2 size="28" color="#6ae08b" variant="Bold"/>
                    </div>
                    <h3>Create a New Task</h3>
                </div>
                <span className="close-popup" id="closeCreateTask" onClick={(e) => ClosePopup(document.querySelector('#createTaskPopup'))}>
                    <CloseCircle color="#ececec" variant="Outline"/>
                </span>
            </div>
            <div className="popup-body">
                <CreateTaskForm projects={props.projects}/>
            </div>
        </div>
    );
}

export default CreateTask;