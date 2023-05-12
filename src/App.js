import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/PostList/CreatePostForm/CreatePostForm';

function App() {

  const [entries, setEntries] = useState([{name: 'danger', post: 'I want to program'}])

  function addNewPost(entry){
    let tempPost = [...entries, entry];

    setEntries(tempPost);
  }

  return (
    <div>
      <CreatePostForm addNewPostProperty={addNewPost}/>
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
