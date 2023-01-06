import React, { useState } from "react";
import { supabase } from "../../../supabase";

import { Calendar } from 'iconsax-react';
import { Menu } from 'iconsax-react';
import { TickSquare } from 'iconsax-react';

import TaskOptionMenu from "../util/TaskOptionMenu";

import { OpenTaskOptions, ExtendTask } from "../../../scripts/public";

const TaskItem = (props) => {
    const subject = props.task;
    const [isCompleted, setIsCompleted] = useState(props.task.task_complete);

    const toggleCompleted = () => {
        props.task.task_complete = !props.task.task_complete;
        setIsCompleted(props.task.task_complete);

        if(props.task.task_complete == true){
            props.task.task_status = 'Complete';
        }
        else{
            props.task.task_status = props.task.task_initial_status;
        }

        SB_ToggleComplete(props.task.task_complete, props.task.task_status);
        props.reload();
    }
    
    const SB_ToggleComplete = async(mark, status) =>{
        const { error } = await supabase
        .from('tasks')
        .update({ task_complete: mark, task_status: status})
        .eq('id', props.task.id);
    }
    
    
    return(
        <li className="task-item" data-key={subject.id}>
            <div className="task-header row align-c spaced">
                <div className="task-header row align-c">
                    <label className="marker-container">
                        <input onChange={toggleCompleted} type='checkbox' className='mark-as-complete' checked={isCompleted ? true : ""}/>
                        <TickSquare color="#6ae08b" variant="Bold" className="complete-checkbox"/>
                    </label>
                    <span className="task-title" onClick={(e) => ExtendTask(e.target)}>
                        {subject.task_name}
                    </span>
                </div>
                <div className="task-details-container row align-c just-e">
                    <div className="task-details row align-c spaced">
                        <div className="task-deadline row align-c">
                            <Calendar size="16" color="#d9d9d9" variant="Bold"/>
                            <span className="task-detail">{new Date(subject.task_deadline).toDateString()}</span>
                        </div>
                        <div className={`task-status bubble ${subject.task_status}`}>
                            <span className="bubble-text">{subject.task_status}</span>
                        </div>
                        <div className="task-project bubble" style={{background: subject.task_project_color + '48', color: subject.task_project_color}}>
                            <span className="bubble-text">{subject.task_project}</span>
                        </div>
                    </div>
                    <span className="task-options" onClick={(e) => OpenTaskOptions(subject.id)}>
                        <Menu size='16' color="#d9d9d9" variant="Bold"/>
                    </span>
                </div>
            </div>
            <div className="task-extra-content closed col">
                <div className={`task-notes-container ${subject.task_notes ? !null : false}`}>
                    <p>{subject.task_notes}</p>
                </div>
                <div className="importance-container">
                    <div className={`task-importance bubble ${subject.task_importance}`}>
                        <span className="bubble-text">{subject.task_importance}</span>
                    </div>
                </div>
            </div>
            <TaskOptionMenu task={subject} projects={props.projects}/>
        </li>
    );
}

export default TaskItem;