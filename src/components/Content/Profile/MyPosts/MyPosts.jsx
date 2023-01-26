import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost.jsx";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: '0'},
        {id: 2, message: 'It\'s my first post', likesCount: '23'}
    ]

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.posts_block}>

            <h3>My posts</h3>

            <AddPost/>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts