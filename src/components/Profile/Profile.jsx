import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
    return <div>
        <div>
            <img
                src='https://avatars.dzeninfra.ru/get-zen_doc/4488022/pub_61a71b2193bf1922fb288704_61a71bce93bcb15eb8977512/scale_1200'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile