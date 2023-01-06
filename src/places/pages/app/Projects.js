import React, { useEffect, useState } from "react";
import { supabase, GetUser } from "../../../supabase";

import Sidebar from "../../components/templates/Sidebar";
import AppHeader from "../../components/util/AppHeader";
import ProjectFeed from "../../components/feeds/ProjectFeed";
import CreateProject from "../../components/popup/CreateProject";
import EditProject from "../../components/popup/EditProject";

import { OpenPopup } from "../../../scripts/public";


const Projects = () => {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const GetDB = async(userID) => {
            //const { data: { user } } = await supabase.auth.getUser();
            userID = localStorage.getItem('User');

            const taskRequest = await supabase.from('tasks').select().eq('user_id', userID);
            const projectRequest =  await supabase.from('projects').select().eq('user_id', userID);
            //console.log(taskRequest.data);
            //console.log(projectRequest.data);
            return {
                tasks: taskRequest.data,
                projects: projectRequest.data
            }
        }
        GetDB().then((value) =>{
            setTasks(value.tasks);
            setProjects(value.projects);
        });

    }, []);

    return(
        <section className="main-content app-viewport row">
            <Sidebar page='projects'/>
            <div className="app-body col">
                <AppHeader />
                <div className="content-area">
                    <div className="content-area-header row spaced align-c">
                        <div className="page-details-container col">
                            <h1>Your Projects</h1>
                            <span className="subtitle">You have <span className="project-number">0</span> projects</span>
                        </div>
                        <button className="BTN primary" id="createProject" onClick={(e) => OpenPopup(document.querySelector('#createProjectPopup'))}>Create Project</button>
                    </div>
                    <div className="project-display-port row spaced">
                        <ProjectFeed feedStatus='queued' name='Queued' projects={projects} tasks={tasks}/>
                        <ProjectFeed feedStatus='in-progress' name='In Progress' projects={projects} tasks={tasks}/>
                        <ProjectFeed feedStatus='on-hold' name='On Hold' projects={projects} tasks={tasks}/>
                        <ProjectFeed feedStatus='complete' name='Complete' projects={projects} tasks={tasks}/>
                        <ProjectFeed feedStatus='archived' name='Archived' projects={projects} tasks={tasks}/>
                    </div>
                </div>
            </div>
            <section className="popup-viewport centered inactive">
                <CreateProject />
                <EditProject />
            </section>
        </section>
    );
};

export default Projects;