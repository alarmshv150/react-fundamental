import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const PostList = (
  /* props destructuring */ { posts, title, remove }
) => {
  if (!posts.length) {
    <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} className="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

