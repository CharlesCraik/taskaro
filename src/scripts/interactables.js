
import { supabase } from "../supabase";

// delete project
const DeleteProject = async (id, name, tasks) => {
    const relatedTasks = tasks.filter(p => p.task_project == name);
    relatedTasks.forEach(item => {
        const taskID = item.id;
        DeleteAllProjectTasks(taskID);
    });
    const { error } = await supabase.from('projects').delete().eq('id', id);
    window.location.reload(false);
}

const DeleteAllProjectTasks = async (id) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id);
    window.location.reload(false);
}

// delete task
const DeleteTask = async (id, projects, name) => {
    console.log(id + ' ' + projects + ' ' + name);
    const theProject = projects.find(p => p.project_name == name);
    const projectTasks = theProject.project_tasklist;
    const updatedTaskList = projectTasks.filter(i => i != id);
    UpdateTaskList(updatedTaskList, theProject.id);

    const { error } = await supabase.from('tasks').delete().eq('id', id);
    window.location.reload(false);
}

const UpdateTaskList = async (taskList, projectID) => {
    const { data, error } = await supabase.from('projects').update({
        project_tasklist: taskList
    }).match({ id: projectID });
}

// edit project
const EditProject = (target, item) => {
    const viewport = target.closest('.popup-viewport');
    target.classList.remove('inactive');
    viewport.classList.remove('inactive');
    target.classList.add('active');
    viewport.classList.add('active');

    target.setAttribute('project', item.id);

    const idField = target.querySelector('#projectID');
    const titleField = target.querySelector('#projectTitle');
    const typeField = target.querySelector('#projectType');
    const statusField = target.querySelector('#projectStatus');
    const startDateField = target.querySelector('#projectStartDate');
    const deadlineField = target.querySelector('#projectDeadline');
    const linkField = target.querySelector('#projectLink');
    const descriptionField = target.querySelector('#projectDescription');

    idField.value = item.id;
    titleField.value = item.project_name;
    typeField.value = item.project_type;
    statusField.value = item.project_status;
    startDateField.value = item.project_start_date;
    deadlineField.value = item.project_deadline;
    linkField.value = item.project_link;
    descriptionField.value = item.project_description;
}

// edit task
const EditTask = (target, item) => {
    const viewport = target.closest('.popup-viewport');
    target.classList.remove('inactive');
    viewport.classList.remove('inactive');
    target.classList.add('active');
    viewport.classList.add('active');

    target.setAttribute('project', item.id);

    const idField = target.querySelector('#taskID');
    const titleField = target.querySelector('#taskTitle');
    const projectField = target.querySelector('#taskProject');
    const deadlineField = target.querySelector('#taskDeadline');
    const statusField = target.querySelector('#taskStatus');
    const importanceField = target.querySelector('#taskImportance');
    const notesField = target.querySelector('#taskNotes');

    idField.value = item.id;
    titleField.value = item.task_name;
    projectField.value = item.task_project;
    deadlineField.value = item.task_deadline;
    statusField.value = item.task_status;
    importanceField.value = item.task_importance;
    notesField.value = item.task_notes;
}

export {DeleteProject, EditProject, DeleteTask, EditTask}