import Button from "../UI/Button/Button";
import { useHistory } from "react-router";

export const PostItem = (/* props drilling from parent*/ props) => {
  const router = useHistory();

  return (
    /* className instead class */
    /* .post>.post__content+.post__btns */
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => router.push(`/post/${props.post.id}`)}>
          Открыть
        </Button>
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
    </div>
  );
};
