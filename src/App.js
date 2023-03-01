import React, { useState, useEffect } from "react";
import { GetUser } from "./supabase";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import SignUp from "./places/pages/auth/SignUp";
import SignIn from "./places/pages/auth/SignIn";

import Dashboard from "./places/pages/app/Dashboard";
import Projects from "./places/pages/app/Projects";
import Tasks from "./places/pages/app/Tasks";
import Calendar from "./places/pages/app/Calendar";
import Settings from "./places/pages/app/Settings";

import './App.css';
import './DarkMode.css';

const App = () => {
    // useEffect(() => {
    //     GetUser();
    //     console.log('Account connected')
    // }, [])

    // new

    return(
        <Router>
            <Route path='/' exact>
                <SignIn />
            </Route>
            <Route path='/sign-up/' exact>
                <SignUp />
            </Route> 
            <Route path='/dashboard/' exact>
                <Dashboard />
            </Route>
            <Route path='/projects/' exact>
                <Projects />
            </Route>
            <Route path='/tasks/' exact>
                <Tasks />
            </Route> 
            <Route path='/calendar/' exact>
                <Calendar />
            </Route> 
            <Route path='/settings/' exact>
                <Settings />
            </Route>   
        </Router>
    );
};


export default App;

