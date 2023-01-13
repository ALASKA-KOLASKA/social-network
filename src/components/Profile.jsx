import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://avatars.dzeninfra.ru/get-zen_doc/4488022/pub_61a71b2193bf1922fb288704_61a71bce93bcb15eb8977512/scale_1200'/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile