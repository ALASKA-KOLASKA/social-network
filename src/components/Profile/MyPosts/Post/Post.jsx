import React from "react";
import s from './Post.module.css';

const Post = () => {
    return <div className={s.item}>
        <img src="https://cdn.igromania.ru/mnt/news/6/6/3/3/e/3/121041/80532ec90055efa7_1200xH.jpg"/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>

}

export default Post