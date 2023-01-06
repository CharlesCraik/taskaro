import React, { useState, useEffect } from "react";
import { supabase } from "../../../../supabase";

import '../Forms.css'
import { ClosePopup } from "../../../../scripts/public";

const CreateTaskForm = (props) => {
    const [projects, setProjects] = useState([]);

    const [taskName, set_taskName] = useState('');
    const [taskProject, set_taskProject] = useState('');
    const [taskDeadline, set_taskDeadline] = useState('');
    const [taskStatus, set_taskStatus] = useState('');
    const [taskImportance, set_taskImportance] = useState('');
    const [taskNotes, set_taskNotes] = useState('');

    useEffect(() => {
        setProjects(props.projects);
    });

    const CreateTaskHandler = (event) => {
        event.preventDefault();

        const colorQuery = projects.find(p => p.project_name == taskProject);
        const color = colorQuery.project_color;

        const queriedProject = projects.find(p => p.project_name == taskProject);

        if(taskName !== ''){
            const task = {
                id: Date.now(),
                name: taskName,
                project: taskProject,
                deadline: taskDeadline,
                status: taskStatus,
                importance: taskImportance,
                notes: taskNotes,
                project_color: color
            };

            SB_CreateTask(task);
            SB_AssignTaskToProject(queriedProject, task.id);
        }
        ClosePopup(document.querySelector('#createTaskPopup'));
    }

    const SB_CreateTask = async(push) => {
        const { error } = await supabase.from('tasks').insert([{ 
            id: push.id,
            task_name: push.name,
            task_project: push.project,
            task_deadline: push.deadline,
            task_initial_status: push.status,
            task_status: push.status,
            task_initial_importance: push.importance,
            task_importance: push.importance,
            task_notes: push.notes,
            task_project_color: push.project_color
        }]);
        //window.location.reload();
    }

    const SB_AssignTaskToProject = async(project, taskID) => {
        const projectTasks = project.project_tasklist;
        projectTasks.push(taskID);
        const { data, error } = await supabase.from('projects').update({
            project_tasklist: projectTasks
        }).match({ id: project.id });
    }

    return(
        <div className="form-container">
            <form className="create-form" id="createTaskForm" onSubmit={CreateTaskHandler}>
                <div className="field-container">
                    <label>Task Title</label>
                    <input type="text" className="light-input" id="taskTitle" placeholder="Task title" onChange={(e) => set_taskName(e.target.value)}/>
                </div>
                <div className="field-container">
                    <label>Task Project</label>
                    <select className="light-input" id="taskProject" defaultValue='Select task project' onChange={(e) => set_taskProject(e.target.value)}>
                            <option disabled hidden className="placeholder">Select task project</option>
                            {projects.map(function(item){
                                return(<option className="input-option" key={item.id} value={item.project_name}>{item.project_name}</option>)
                            })}
                    </select>
                </div>
                <div className="field-container">
                    <label>Task Deadline</label>
                    <input type='date' className="light-input" id="taskDeadline" placeholder="DD/MM/YYYY" onChange={(e) => set_taskDeadline(e.target.value)}/>
                </div>
                <div className="field-row">
                    <div className="field-container">
                        <label>Task Status</label>
                        <select className="light-input" id="taskStatus" defaultValue='Select status' onChange={(e) => set_taskStatus(e.target.value)}>
                                <option disabled hidden className="placeholder">Select status</option>
                                <option className="input-option" value='Queued'>Queued</option>
                                <option className="input-option" value='In Progress'>In Progress</option>
                                <option className="input-option" value='In Review'>In Review</option>
                                <option className="input-option" value='On Hold'>On Hold</option>
                        </select>
                    </div>
                    <div className="field-container">
                        <label>Task Importance</label>
                        <select className="light-input" id="taskImportance" defaultValue='Select importance' onChange={(e) => set_taskImportance(e.target.value)}>
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
                    <textarea className="light-input" id="taskNotes" form="createTaskForm" rows='6' placeholder="Description" onChange={(e) => set_taskNotes(e.target.value)}/>   
                </div>
                <div className="action-container align-c row just-e">
                    <span className="cancel-action" id="cancelTask" onClick={(e) => ClosePopup(document.querySelector('#createTaskPopup'))}>Cancel</span>
                    <button className="BTN primary" id="submitTask" type="submit">Create Task</button>
                </div>
            </form>
        </div>
    );
}

export default CreateTaskForm;