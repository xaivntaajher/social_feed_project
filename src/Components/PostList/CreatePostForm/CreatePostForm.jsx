import React, { useState } from 'react';


const CreatePostForm = (props) => {
    
    const [name, setPersonName] = useState('')
    const [post, setPersonPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault(); // prevent page from refreshing
        let newPost = {
            name: name,
            post: post
        }
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setPersonName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" value={post} onChange={(event) => setPersonPost(event.target.value)}/>
                <button type='submit'>Post</button>
            </div>

        </form>
     );
}
 
export default CreatePostForm;
