import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://avatars.dzeninfra.ru/get-zen_doc/4488022/pub_61a71b2193bf1922fb288704_61a71bce93bcb15eb8977512/scale_1200'/>
            </div>
            <div className={s.description_block}>
                ava+description
            </div>
        </div>
    )
}



export default ProfileInfo