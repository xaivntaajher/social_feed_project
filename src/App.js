import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import NavBar from './Components/NavBar/NavBar';
import './App.css'


function App() {

  const [entries, setEntries] = useState([{name: '', post: ''}])

  function addNewPost(entry){
    let tempPost = [...entries, entry];

    setEntries(tempPost);
  }

  return (
    <div>
      <header>
        <nav>
          <NavBar/>
        </nav>
      </header>
        <div>
          <CreatePostForm addNewPostProperty={addNewPost}/>
        </div>
        <div>
          <PostList parentEntries={entries} />
        </div>
    </div>

  );
}

export default App;
