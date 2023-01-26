import React from 'react';
import s from './Navbar.module.css';
import Page from "./Page/Page.jsx";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <Page
                src='https://www.jetbrains.com/space/img/extend-section/icons/applications.svg'
                to="/profile"
                page="Profile"
            />

            <Page
                src='https://www.jetbrains.com/space/img/extend-section/icons/applications.svg'
                to="/dialogs"
                page="Messages"
            />

            <Page
                src='https://www.jetbrains.com/space/img/extend-section/icons/applications.svg'
                to="/news"
                page="News"
            />

            <Page
                src='https://www.jetbrains.com/space/img/extend-section/icons/applications.svg'
                to="/music"
                page="Music"
            />

            <Page
                src='https://www.jetbrains.com/space/img/extend-section/icons/applications.svg'
                to="/settings"
                page="Settings"
            />
        </nav>
    )
}

export default Navbar