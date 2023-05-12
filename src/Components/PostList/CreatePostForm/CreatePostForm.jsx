import React, { useState } from 'react';


const CreatePostForm = (props) => {
    
    const [personName, setPersonName] = useState('')
    const [personPost, setPersonPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            personName: personName,
            personPost: personPost
        }
        console.log(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={personName} onChange={(event) => setPersonName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" value={personPost} onChange={(event) => setPersonPost(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Post</button>
            </div>
        </form>
     );
}
 
export default CreatePostForm;
