import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';


function App() {

  const [entries, setEntries] = useState([{name: 'danger', post: 'I want to program'}])

  return (
    <div>
      <PostList parentEntries={entries} />
    </div>
  );
}

export default App;
