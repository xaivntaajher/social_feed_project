import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/PostList/CreatePostForm/CreatePostForm';

function App() {

  const [entries, setEntries] = useState([{name: 'danger', post: 'I want to program'}])

  return (
    <div>
      <CreatePostForm/>
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
