import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useState } from "react";

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    /* preventing default browser behavior */
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    /* clearing input after post creation */
    setPost({ title: "", body: "" });
  };

  return (
    <Form>
      <Input
        value={post.title}
        type="text"
        placeholder="Название поста"
        onChange={(e) =>
          setPost({
            ...post,
            /* changing only the desired field */ title: e.target.value,
          })
        }
      />
      <Input
        value={post.body}
        type="text"
        placeholder="Описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <Button onClick={addNewPost}>Создать пост</Button>
    </Form>
  );
};
