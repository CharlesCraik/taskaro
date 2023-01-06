import React, { useEffect } from "react";
import { GetUser } from "../../../supabase";
import Sidebar from "../../components/templates/Sidebar";
import AppHeader from "../../components/util/AppHeader";


const Calendar = () => {
    // useEffect(() => {
    //     GetUser();
    //     console.log('Account connected')
    // }, [])

    return(
        <section className="main-content app-viewport row">
            <Sidebar page='calendar'/>
            <div className="app-body col">
                <AppHeader />
                <div className="content-area">
                    <h1>Calendar</h1>
                </div>
            </div>
        </section>
        
    );
};

export default Calendar;