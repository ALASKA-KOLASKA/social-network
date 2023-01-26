import React from "react";
import s from './AddPost.module.css';
const AddPost = () => {

    return (
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.button}>Add post</button>
                </div>
            </div>
    )
}

export default AddPost