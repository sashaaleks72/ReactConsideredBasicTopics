import React, { useState } from "react";
import MyBtn from "./UI/MyBtn/MyBtn";
import MyInput from "./UI/MyInput/MyInput";

const PostForm = ({ addPost }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                const newPost = {
                    ...post,
                    id: new Date().getMilliseconds(),
                };

                addPost(newPost);
                setPost({ title: "", body: "" });
            }}
        >
            <MyInput
                type="text"
                placeholder="Write post`s title, please"
                value={post.title}
                onChange={(e) => {
                    setPost({ ...post, title: e.target.value });
                }}
            />
            <MyInput
                type="text"
                placeholder="Write post`s description, please"
                value={post.body}
                onChange={(e) => {
                    setPost({ ...post, body: e.target.value });
                }}
            />
            <MyBtn>Add new post</MyBtn>
        </form>
    );
};

export default PostForm;
