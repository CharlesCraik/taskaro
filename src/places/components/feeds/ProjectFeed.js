import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabase";

import ProjectItem from '../cards/ProjectItem'

const ProjectFeed = (props) => {
    
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {Reload()}, 1000);
    },);

    function Reload(){
        const allProjects = props.projects;
        if(props.name == 'Queued'){
            const query = allProjects.filter(p => p.project_status == 'Queued');
            setProjects(query);
        }
        else if(props.name == 'In Progress'){
            const query = allProjects.filter(p => p.project_status == 'In Progress');
            setProjects(query);
        }
        else if(props.name == 'On Hold'){
            const query = allProjects.filter(p => p.project_status == 'On Hold');
            setProjects(query);
        }
        else if(props.name == 'Complete'){
            const query = allProjects.filter(p => p.project_status == 'Complete');
            setProjects(query);
        }
        else if(props.name == 'Archived'){
            const query = allProjects.filter(p => p.project_status == 'Archived');
            setProjects(query);
        }
        else{
            return []
        }
    }

    return(
        <div className={`project-feed-container ${props.feedStatus}-projects-container`}>
            <div className="project-feed-title">
                <span className={`subheader ${props.feedStatus}`}>{props.name}</span>
            </div>
            <ul className="project-feed in-progress-projects" id={`${props.feedStatus}-projects-feed`} length={projects.length}>
                {projects.map(function(item){
                    return(<ProjectItem key={item.id} project={item} tasks={props.tasks}/>)
                })}
            </ul>
        </div>
    );
}

export default ProjectFeed;