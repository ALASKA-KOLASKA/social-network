import React from "react";
import s from "./Friends.module.css"
import {NavLink} from "react-router-dom";


const Friends = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <h3>Friends</h3>

            <div><NavLink to='/dialogs/1' className={s.dialog + ' ' + s.active}>
                <img
                    className={s.img}
                    src='https://images.thevoicemag.ru/upload/img_cache/836/836f650e4d1d05e86f92a970c8d74289_ce_667x444x0x162_cropped_1332x888.jpg'
                />
                Dima
            </NavLink></div>

            <div><NavLink to='/dialogs/2' className={s.dialog + ' ' + s.active}>
                <img
                    className={s.img}
                    src='https://lisa.ru/images/storage/2018/12/24/325502_576a151cf5.jpeg'
                />
                Andrew
            </NavLink></div>

            <div><NavLink to='/dialogs/3' className={s.dialog + ' ' + s.active}>
                <img
                    className={s.img}
                    src='https://avatars.mds.yandex.net/get-afishanew/28638/bd564a4fa261565eec7b6bd28fad762f/orig'
                />
                Sveta
            </NavLink></div>

        </div>
    )
}

export default Friends;