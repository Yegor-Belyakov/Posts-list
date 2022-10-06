import React, { useState } from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";

export default function PostForm({ create }) {
  const [post, setPost] = useState({ body: "", title: "" });

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ body: "", title: "" });
    
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(event) => {
          setPost({ ...post, title: event.target.value });
        }}
        type="text"
        placeholder="name of post"
      ></MyInput>

      <MyInput
        value={post.body}
        onChange={(event) => {
          setPost({ ...post, body: event.target.value });
        }}
        type="text"
        placeholder="body of post"
      ></MyInput>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}
