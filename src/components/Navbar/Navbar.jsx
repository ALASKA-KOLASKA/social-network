import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import activeColor from "./ActiveColor.js";


const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div>
            <NavLink to="/profile" className = {activeColor}> Profile </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className = {activeColor}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className = {activeColor}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className = {activeColor}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" className = {activeColor}>Settings</NavLink>
        </div>
    </nav>
    )
}

export default Navbar