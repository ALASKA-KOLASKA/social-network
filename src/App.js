import React from "react";
import s from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";

const App = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <div className={s.app_wrapper_content}>
                <Dialogs/>
            </div>
        </div>
    );
}


export default App;
