import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostList from "./components/PostList";

import PostForm from "./components/UI/PostForm";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript best language" },
    { id: 2, title: "JavaScript 2", body: "JavaScript best language" },
    { id: 3, title: "JavaScript 3", body: "JavaScript best language" },
    { id: 4, title: "JavaScript 4", body: "JavaScript best language" },
    { id: 5, title: "JavaScript 5", body: "JavaScript best language" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов:"}
      />
    </div>
  );
}

export default App;
