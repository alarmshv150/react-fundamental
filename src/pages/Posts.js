import { useState, useRef, useEffect } from "react";
import PostService from "../API/PostService";
import Button from "../components/UI/Button/Button";
import Modal from "../components/UI/Modal/Modal";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/Pagination/Pagination";
import Select from "../components/UI/Select/Select";
import PostForm from "../components/Post/PostForm";
import PostFilter from "../components/Post/PostFilter";
import PostList from "../components/Post/PostList";
import { usePosts } from "../hooks/usePosts";
import { useFetch } from "../hooks/useFetch";
import { useObserver } from "../hooks/useObserver";
import { getPageCount } from "../utils/pages";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetch(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit, fetchPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPosts(page);
  };

  return (
    <div className="App">
      <Button style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </Button>

      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <hr style={{ margin: "15 px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <Select
        value={limit}
        defaultValue="К-во элементов на странице"
        onChange={(value) => setLimit(value)}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />
      {/* conditional rendering using the logical && operator */}
      {postError && <h1>Произошла ошибка ${postError}</h1>}

      <PostList
        posts={sortedAndSearchedPosts}
        title="Посты по JS"
        remove={removePost}
      />
      <di ref={lastElement} style={{ height: 20, background: "red" }} />

      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};

