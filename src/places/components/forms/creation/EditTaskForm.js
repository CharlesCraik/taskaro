import React, {useEffect, useState} from "react";
import { supabase } from "../../../../supabase";

import '../Forms.css'
import { ClosePopup } from "../../../../scripts/public";

const EditTaskForm = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(props.projects);
    });

    const UpdateTaskHandler = (event) => {
        event.preventDefault();

        const id = document.querySelector('#editTaskForm #taskID').value;
        const title = document.querySelector('#editTaskForm #taskTitle').value;
        const project = document.querySelector('#editTaskForm #taskProject').value;
        const deadline = document.querySelector('#editTaskForm #taskDeadline').value;
        const status = document.querySelector('#editTaskForm #taskStatus').value;
        const importance = document.querySelector('#editTaskForm #taskImportance').value;
        const notes = document.querySelector('#editTaskForm #taskNotes').value;

        const colorQuery = projects.find(p => p.project_name == project);
        const color = colorQuery.project_color;

        console.log(title);
        if(title !== ''){
            const task = {
                id: id,
                name: title,
                project: project,
                deadline: deadline,
                status: status,
                importance: importance,
                notes: notes,
                project_color: color
            };

            SB_UpdateTask(task);
        }
        ClosePopup(document.querySelector('#editTaskPopup'));
    }

    const SB_UpdateTask = async (push) => {
        console.log(push);
        const { error } = await supabase.from('tasks').update([{ 
            task_name: push.name,
            task_project: push.project,
            task_deadline: push.deadline,
            task_status: push.status,
            task_initial_status: push.status,
            task_importance: push.importance,
            task_initial_importance: push.importance,
            task_notes: push.notes,
            task_project_color: push.project_color
        }]).eq('id', push.id);
        window.location.reload();
    }

    return(
        <div className="form-container">
            <form className="create-form" id="editTaskForm" onSubmit={UpdateTaskHandler}>
                <div className="field-container hidden">
                    <label>Task ID</label>
                    <input type="text" className="light-input" id="taskID" placeholder="Task ID" disabled/>
                </div>
                <div className="field-container">
                    <label>Task Title</label>
                    <input type="text" className="light-input" id="taskTitle" placeholder="Task title"/>
                </div>
                <div className="field-container">
                    <label>Task Project</label>
                    <select className="light-input" id="taskProject" defaultValue='Select task project'>
                            <option disabled hidden className="placeholder">Select task project</option>
                            {projects.map(function(item){
                                return(<option className="input-option" key={item.id} value={item.project_name}>{item.project_name}</option>)
                            })}
                    </select>
                </div>
                <div className="field-container">
                    <label>Task Deadline</label>
                    <input type='date' className="light-input" id="taskDeadline" placeholder="DD/MM/YYYY"/>
                </div>
                <div className="field-row">
                    <div className="field-container">
                        <label>Task Status</label>
                        <select className="light-input" id="taskStatus" defaultValue='Select status'>
                                <option disabled hidden className="placeholder">Select status</option>
                                <option className="input-option" value='Queued'>Queued</option>
                                <option className="input-option" value='In Progress'>In Progress</option>
                                <option className="input-option" value='In Review'>In Review</option>
                                <option className="input-option" value='On Hold'>On Hold</option>
                        </select>
                    </div>
                    <div className="field-container">
                        <label>Task Importance</label>
                        <select className="light-input" id="taskImportance" defaultValue='Select importance'>
                                <option disabled hidden className="placeholder">Select importance</option>
                                <option className="input-option" value='Low'>Low</option>
                                <option className="input-option" value='Medium'>Medium</option>
                                <option className="input-option" value='High'>High</option>
                                <option className="input-option" value='Priority'>Priority</option>
                        </select>
                    </div>
                </div>
                <div className="field-container">
                <label>Task Notes</label>
                    <textarea className="light-input" id="taskNotes" form="editTaskForm" rows='6' placeholder="Description"/>   
                </div>
                <div className="action-container align-c row just-e">
                    <span className="cancel-action" id="cancelTask" onClick={(e) => ClosePopup(document.querySelector('#editTaskPopup'))}>Cancel</span>
                    <button className="BTN primary" id="submitTask" type="submit">Update Task</button>
                </div>
            </form>
        </div>
    );
}

export default EditTaskForm