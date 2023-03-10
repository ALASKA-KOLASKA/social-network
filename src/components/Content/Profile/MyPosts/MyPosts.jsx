import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost.jsx";

const MyPosts = (props) => {

    let postsElements = props.posts
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