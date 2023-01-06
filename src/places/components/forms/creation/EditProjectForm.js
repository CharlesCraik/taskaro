import React, { useState, useEffect } from "react";
import { supabase } from "../../../../supabase";

import '../Forms.css'
import { ClosePopup } from "../../../../scripts/public";

const EditProjectForm = () => {
    // const [projectName, set_projectName] = useState();
    // const [projectType, set_projectType] = useState();
    // const [projectStatus, set_projectStatus] = useState();
    // const [projectStartDate, set_projectStartDate] = useState();
    // const [projectDeadline, set_projectDeadline] = useState();
    // const [projectLink, set_projectLink] = useState();
    // const [projectDescription, set_projectDescription] = useState();

    const ValueHandler = (target) => {
        console.log('Value');
    }

    const UpdateProjectHandler = (event) => {
        event.preventDefault();

        var id = document.querySelector('#editProjectForm #projectID').value;
        var title = document.querySelector('#editProjectForm #projectTitle').value;
        var type = document.querySelector('#editProjectForm #projectType').value;
        var status = document.querySelector('#editProjectForm #projectStatus').value;
        var startDate = document.querySelector('#editProjectForm #projectStartDate').value;
        var deadline = document.querySelector('#editProjectForm #projectDeadline').value;
        var link = document.querySelector('#editProjectForm #projectLink').value;
        var description = document.querySelector('#editProjectForm #projectDescription').value;

        const colorInputs = document.querySelectorAll('#editProjectForm input.form-select-item.project-color');
        var color = '';
        colorInputs.forEach(function(i){
            if(i.checked){
                color = i.value;
            }
            else{
                ;
            }
        });

        console.log(title);
        if(title !== ''){
            const project = {
                id: id,
                name: title,
                type: type,
                status: status,
                startDate: startDate,
                deadline: deadline,
                link: link,
                description: description,
                color: color
            };

            SB_UpdateTaskColor(project);
            SB_UpdateProject(project);
        }
        ClosePopup(document.querySelector('#editProjectPopup'));
    }

    const SB_UpdateProject = async (push) => {
        console.log(push);
        const { error } = await supabase.from('projects').update([{ 
            project_name: push.name,
            project_type: push.type,
            project_status: push.status,
            project_start_date: push.startDate,
            project_deadline: push.deadline,
            project_link: push.link,
            project_description: push.description,
            project_color: push.color
        }]).eq('id', push.id);
        window.location.reload();
    }

    const SB_UpdateTaskColor = async(push) => {
        const { error } = await supabase.from('tasks').update([{ 
            task_project_color: push.color
        }]).eq('task_project', push.name);
    }


    return(
        <div className="form-container">
            <form className="create-form" id="editProjectForm" onSubmit={UpdateProjectHandler}>
            <div className="field-container hidden">
                    <label>Project ID</label>
                    <input type="text" className="light-input" id="projectID" placeholder="Project ID" disabled/>
                </div>
                <div className="field-container">
                    <label>Project Title</label>
                    <input type="text" className="light-input" id="projectTitle" placeholder="Project Title" />
                </div>
                <div className="field-row">
                    <div className="field-container">
                        <label>Project Type</label>
                        <select className="light-input" id="projectType" defaultValue='Select project type'>
                            <option disabled hidden className="placeholder">Select project type</option>
                            <option className="input-option" value='Website'>Website</option>
                            <option className="input-option" value='Webapp'>Webapp</option>
                            <option className="input-option" value='Game'>Game</option>
                            <option className="input-option" value='Mobile App'>Mobile App</option>
                            <option className="input-option" value='Research'>Research</option>
                        </select>
                    </div>
                    <div className="field-container">
                        <label>Project Status</label>
                        <select className="light-input" id="projectStatus" defaultValue='Select initial status'>
                            <option disabled hidden className="placeholder">Select initial status</option>
                            <option className="input-option" value='Queued'>Queued</option>
                            <option className="input-option" value='In Progress'>In Progress</option>
                            <option className="input-option" value='On Hold'>On Hold</option>
                            <option className="input-option" value='Complete'>Complete</option>
                            <option className="input-option" value='Archived'>Archived</option>
                        </select>
                    </div>
                </div>
                <div className="field-row">
                    <div className="field-container">
                        <label>Project Start Date</label>
                        <input type='date' className="light-input" id="projectStartDate" placeholder="DD/MM/YYYY"/>
                    </div>
                    <div className="field-container">
                        <label>Project Deadline</label>
                        <input type='date' className="light-input" id="projectDeadline" placeholder="DD/MM/YYYY"/>
                    </div>
                </div>
                <div className="field-container">
                    <label>Project Link</label>
                    <input type='url' className="light-input" id="projectLink" placeholder="Project link"/>
                </div>
                <div className="field-container">
                    <label>Project Descrption</label>
                    <textarea className="light-input" id="projectDescription" form="editProjectForm" rows='6' placeholder="Description"/>
                </div>
                <div className="field-container">
                    <label>Project Color</label>
                    <div className="project-color-selection row spaced project-colors" id="projectColor">
                        <label>
                            <input type="radio" value="#00aae6" className="form-select-item project-color" name="project-color-select"/>
                        </label>
                        <label>
                            <input type="radio" value="#2d71fe" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#6f4eff" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#9d2dbe" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#db5bdc" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#ff83a8" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#d70051" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#ea3d32" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#fa8d2f" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#f4ce2b" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#92cb00" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#63d16f" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#37c5ab" className="form-select-item project-color" name="project-color-select" />
                        </label>
                        <label>
                            <input type="radio" value="#87969f" className="form-select-item project-color" name="project-color-select" />
                        </label>
                    </div>
                </div>
                <div className="action-container align-c row just-e">
                    <span className="cancel-action" id="cancelProject" onClick={(e) => ClosePopup(document.querySelector('#editProjectPopup'))}>Cancel</span>
                    <button className="BTN primary" id="submitProject" type="submit">Update Project</button>
                </div>
            </form>
        </div>
    );
}

export default EditProjectForm;