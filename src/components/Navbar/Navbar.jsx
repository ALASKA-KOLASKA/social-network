import React from 'react';
import s from './Navbar.module.css';
import Page from "./Page/Page.jsx";
import Friends from "../Content/Friends/Friends";


const Navbar = () => {

    let pages = [
        {
            src:'https://www.jetbrains.com/space/img/extend-section/icons/applications.svg',
            to:'/profile',
            page:'Profile',
        },
        {
            src:'https://www.jetbrains.com/space/img/extend-section/icons/applications.svg',
            to:'/dialogs',
            page:'Messages'
        },
        {
            src:'https://www.jetbrains.com/space/img/extend-section/icons/applications.svg',
            to:'/news',
            page:'News'
        },
        {
            src:'https://www.jetbrains.com/space/img/extend-section/icons/applications.svg',
            to:'/music',
            page:'Music'
        },
        {
            src:'https://www.jetbrains.com/space/img/extend-section/icons/applications.svg',
            to:'/settings',
            page:'Settings'
        }


    ]

    let pagesElements = pages
        .map(p => <Page src={p.src} to={p.to} page={p.page}/>)

    return (
        <nav className={s.nav}>
            {pagesElements}
            <Friends/>
        </nav>
    )
}

export default Navbar