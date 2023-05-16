import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([{ name: "", post: "" }]);

  function addNewPost(entry) {
    let tempPost = [...entries, entry];

    setEntries(tempPost);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost} />
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
