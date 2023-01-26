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

const App = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'}
    ]

    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.library_background}>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                        <Route path='/profile' element={<Profile posts={posts}/>}/>
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
