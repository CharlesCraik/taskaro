import React, {useState} from "react";

import { Menu } from 'iconsax-react';
import { Calendar } from 'iconsax-react';
import { Diamonds } from 'iconsax-react';

import ProjectOptionMenu from "../util/ProjectOptionMenu";

import { OpenOptions } from "../../../scripts/public";

import './Cards.css';
import { useEffect } from "react";

const ProjectItem = (props) => {
    const subject = props.project;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        GetProgress();
    }, [])

    const GetProgress = () => {
        const tasks = subject.project_tasklist;
        var totalTasks = tasks.length;
        var completeTasks = 0;
        var thisProgress = 0;

        tasks.forEach(function(i){
            const thisTask = props.tasks.find(t => t.id == i);
            if(thisTask.task_complete == true){
                completeTasks = completeTasks + 1;
            }
        });

        console.log('Complete: ' + completeTasks);
        console.log('Total: ' + totalTasks);

        if(totalTasks == 0){
            thisProgress = 0;
            setProgress(thisProgress);
        }
        else{
            thisProgress = (completeTasks / totalTasks) * 100; 
            console.log('Progress = ' + thisProgress);
            setProgress(thisProgress);
        }
    }

    return(
        <li className="project-item" data-key={subject.id}>
            <div className="project-item-head row spaced">
                <div className="project-icon-container" style={{background: subject.project_color + '48'}}>
                    <Diamonds size="32" color={subject.project_color} variant="Bold"/>
                </div>
                <span className="project-options" onClick={(e) => OpenOptions(subject.id)}>
                    <Menu size='20' color="#d9d9d9" variant="Bold"/>
                </span>
            </div>
            <div className="project-item-body col">
                <span className="project-title">
                    {subject.project_name}
                </span>
                <div className="progress-bar-container">
                    <span className="progress-bar-completion" style={{width: progress + '%'}}>

                    </span>
                </div>
                <div className="project-detail-container project-deadline row align-c">
                    <Calendar size="16" color="#d9d9d9" variant="Bold"/>
                    <span className="project-detail">{new Date(subject.project_deadline).toDateString()}</span>
                </div>
            </div>
            <ProjectOptionMenu project={subject} tasks={props.tasks}/>
        </li>
    );
}

export default ProjectItem;