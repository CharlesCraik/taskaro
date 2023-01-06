import React, {useState, useEffect} from "react";
import TaskItem from "../cards/TaskItem";


const TaskFeed = (props) => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {Reload()}, 1000);
    },);

    function Reload(){
        const allTasks = props.tasks;
        if(props.name == 'Priority'){
            const query_1 = allTasks.filter(t => t.task_status != 'Complete');
            const query = query_1.filter(t => t.task_importance == 'Priority');
            setTasks(query);
        }
        else if(props.name == 'Upcoming'){
            const query_1 = allTasks.filter(t => t.task_importance != 'Priority');
            const query = query_1.filter(t => t.task_status != 'Complete');
            setTasks(query);
        }
        else if(props.name == 'Completed'){
            const query = allTasks.filter(t => t.task_status == 'Complete');
            setTasks(query);
        }
        else{
            return []
        }
    }

    return(
        <div className={`task-feed-container col ${props.identity}-tasks-container`}>
            <div className="task-feed-header">
                <h3>{props.name} Tasks</h3>
            </div>
            <ul className={`task-feed col ${props.identity}-task-feed`} length={tasks.length}>
                {tasks.map(function(item){
                    return(<TaskItem key={item.id} task={item} reload={Reload} projects={props.projects}/>)
                })}
            </ul>
        </div>
    );
}

export default TaskFeed;