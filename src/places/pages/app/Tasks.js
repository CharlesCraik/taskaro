import React, { useState, useEffect } from "react";
import { supabase } from "../../../supabase";
import { OpenPopup } from "../../../scripts/public";

import Sidebar from "../../components/templates/Sidebar";
import AppHeader from "../../components/util/AppHeader";

import { Fatrows } from 'iconsax-react';
import { Kanban } from 'iconsax-react';

import TaskFeed from "../../components/feeds/TaskFeed";
import CreateTask from "../../components/popup/CreateTask";

import EditTask from "../../components/popup/EditTask";


const Tasks = () => {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const GetTasks = async(userID) => {
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
        GetTasks().then((value) =>{
            setTasks(value.tasks);
            setProjects(value.projects);
        });

    }, []);


    return(
        <section className="main-content app-viewport row">
            <Sidebar page='tasks'/>
            <div className="app-body col">
                <AppHeader />
                <div className="content-area tasks-area">
                    <div className="page-details-container col">
                        <h1>Your Tasks</h1>
                        <span className="subtitle">You have <span className="tasks-number">0</span> tasks</span>
                    </div>
                    <div className="page-options row just-e align-c">
                        <div className="view-options row align-c">
                            <button className="filter-switch list-view row align-c selected" id="taskListView"><Fatrows size="20" color="#262626" variant="Bold"/>List </button>
                            <button className="filter-switch board-view row align-c unselected" id="taskListView"><Kanban size="20" color="#e1e1e1" variant="Outline"/>Board </button>
                        </div>
                        <button className="BTN primary" id="createTask" onClick={(e) => OpenPopup(document.querySelector('#createTaskPopup'))}>Create Task</button>
                    </div>    
                    <div className="task-display-port row spaced">
                        <TaskFeed name='Priority' identity='priority' tasks={tasks} projects={projects}/>
                        <TaskFeed name='Upcoming' identity='upcoming' tasks={tasks} projects={projects}/>
                        <TaskFeed name='Completed' identity='completed' tasks={tasks} projects={projects}/>
                    </div>
                </div>
            </div>
            <section className="popup-viewport centered inactive">
                <CreateTask projects={projects}/>
                <EditTask projects={projects} />
            </section>
        </section>
        
    );
};

export default Tasks;