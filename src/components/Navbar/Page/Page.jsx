import React from 'react';
import {NavLink} from "react-router-dom";
import activeColor from "./ActiveColor.js";
import s from "./Page.module.css"


const Page = (props) => {
    return (
            <div>
                <img className={s.img} src={props.src} />
                <NavLink to={props.to} className={activeColor}> {props.page} </NavLink>
            </div>
    )
}

export default Page