// dark mode switch
const DarkModeSwitch = (toggle) => {
    if(toggle.checked == true){
        localStorage.setItem('darkMode', 'true');
        DarkMode();
        return(localStorage.getItem('darkMode'));
    }
    else if(toggle.checked == false){
        localStorage.setItem('darkMode', 'false');
        DarkMode();
        return(localStorage.getItem('darkMode'));
    }
}


// check dark mode
const DarkMode = () =>{
    localStorage.getItem('darkMode');
    if(localStorage.getItem('darkMode') === 'true'){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
    else if(localStorage.getItem('darkMode') === 'false'){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
}

export {DarkMode, DarkModeSwitch}