import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { fetchPostById, isLoading, error } = useFetch(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const { fetchComments, isComLoading, comError } = useFetch(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  });

  return (
    <>
      <h1>Вы открыли страницу постас ID ={params.id}</h1>
      {/* conditional rendering using ternary operator */}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} style={{ marginTop: 15 }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
