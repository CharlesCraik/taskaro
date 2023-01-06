import React from "react";

import { TagCross } from 'iconsax-react';
import { Edit } from 'iconsax-react';
import { CloseCircle } from 'iconsax-react';

import { HideOptions } from "../../../scripts/public";
import { DeleteProject, EditProject } from "../../../scripts/interactables";

const ProjectOptionMenu = (props) => {
    const subject = props.project;
    return(
        <div className="project-options-container">
            <ul className="project-options col">
                <li className="project-option delete-option" onClick={(e) => DeleteProject(subject.id, subject.project_name, props.tasks)}>
                    <span className="option delete-project row align-c">
                        <TagCross color="#f87c74" variant="Bold" size='16'/>
                        Delete Project
                    </span>
                </li>
                <li className="project-option">
                    <span className="option edit-project row align-c" onClick={(e) => EditProject(document.querySelector('#editProjectPopup'), subject)}>
                        <Edit size="16" color="#262626" variant="Bold"/>
                        Edit Project
                    </span>
                </li>
                <li className="project-option">
                    <span className="option edit-project row align-c" onClick={(e) => HideOptions(subject.id)}>
                        <CloseCircle size="16" color="#262626" variant="Bold"/>
                        Cancel
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default ProjectOptionMenu