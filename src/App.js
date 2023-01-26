import React from "react";
import s from './App.module.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Content/Profile/Profile.jsx";
import Dialogs from "./components/Content/Dialogs/Dialogs.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./components/Content/News/News.jsx";
import Music from "./components/Content/Music/Music.jsx";
import Settings from "./components/Content/Settings/Settings.jsx";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.library_background}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
