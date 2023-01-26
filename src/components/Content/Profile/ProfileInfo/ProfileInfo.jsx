import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://www.jetbrains.com/space/img/header-section/space-swirl.svg'/>
            </div>
            <div className={s.description_block}>
                ava+description
            </div>
        </div>
    )
}



export default ProfileInfo