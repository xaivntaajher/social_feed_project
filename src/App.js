import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/PostList/CreatePostForm/CreatePostForm';
import NavBar from './Components/PostList/NavBar/NavBar';
import './Components/PostList/NavBar/NavBar.css';
import './Components/PostList/CreatePostForm/CreatePostForm.css';


function App() {

  const [entries, setEntries] = useState([{name: '', post: ''}])

  function addNewPost(entry){
    let tempPost = [...entries, entry];

    setEntries(tempPost);
  }

  return (
    <div>
      <header className='header'>
        <nav>
          <NavBar/>
        </nav>
      </header>
        <div className='postform'>
          <CreatePostForm addNewPostProperty={addNewPost}/>
        </div>
        <div>
          <PostList parentEntries={entries} />
        </div>
    </div>

  );
}

export default App;
