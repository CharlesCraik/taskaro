import React from "react";

import { TagCross } from 'iconsax-react';
import { Edit } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import { CloseTaskOptions } from "../../../scripts/public";
import { DeleteTask, EditTask } from "../../../scripts/interactables";

const TaskOptionMenu = (props) => {
    const subject = props.task;
    return(
        <div className="task-options-container">
            <ul className="task-options col">
                <li className="task-option delete-option">
                    <span className="option delete-task row align-c" onClick={(e) => DeleteTask(subject.id, props.projects, subject.task_project)}>
                        <TagCross color="#f87c74" variant="Bold" size='16'/>
                        Delete Task
                    </span>
                </li>
                <li className="task-option">
                    <span className="option edit-task row align-c" onClick={(e) => EditTask(document.querySelector('#editTaskPopup'), subject)}>
                        <Edit size="16" color="#262626" variant="Bold"/>
                        Edit Task
                    </span>
                </li>
                <li className="task-option">
                    <span className="option row align-c"  onClick={(e) => CloseTaskOptions(subject.id)}>
                        <CloseCircle size="16" color="#262626" variant="Bold"/>
                        Cancel
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default TaskOptionMenu