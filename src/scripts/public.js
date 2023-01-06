// close popup
const ClosePopup = (target) => {
    const viewport = target.closest('.popup-viewport');
    target.classList.remove('active');
    viewport.classList.remove('active');
    target.classList.add('inactive');
    viewport.classList.add('inactive');
}

// open popup
const OpenPopup = (target) => {
    const viewport = target.closest('.popup-viewport');
    target.classList.remove('inactive');
    viewport.classList.remove('inactive');
    target.classList.add('active');
    viewport.classList.add('active');
}

// open project options
const OpenOptions = (id) => {
    var ref = 'li.project-item[data-key="' + id + '"]';
    var target = document.querySelector(ref);
    target.classList.add('editing');
}

// hide project options
const HideOptions = (id) => {
    var ref = 'li.project-item[data-key="' + id + '"]';
    var target = document.querySelector(ref);
    target.classList.remove('editing'); 
}

// open task options
const OpenTaskOptions = (id) => {
    var ref = 'li.task-item[data-key="' + id + '"]';
    var target = document.querySelector(ref);
    target.classList.add('editing');
}

// close task options
const CloseTaskOptions = (id) => {
    var ref = 'li.task-item[data-key="' + id + '"]';
    var target = document.querySelector(ref);
    target.classList.remove('editing');
}

// extend task item
const ExtendTask = (target) => {
    const taskItem = target.closest('li.task-item');
    const targetContent = taskItem.querySelector('.task-extra-content');

    const allTabs = document.querySelectorAll('li.task-item .task-extra-content');
    allTabs.forEach(function(t){
        if(t.classList.contains('open')){
            t.classList.remove('open');
            t.classList.add('closed');
        }
    });

    targetContent.classList.remove('closed');
    targetContent.classList.add('open');
    
}

export {ClosePopup, OpenPopup, OpenOptions, HideOptions, OpenTaskOptions, CloseTaskOptions, ExtendTask}