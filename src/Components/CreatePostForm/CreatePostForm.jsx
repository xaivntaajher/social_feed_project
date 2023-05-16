import React, { useState } from 'react';
import '../CreatePostForm/CreatePostForm.css';

const CreatePostForm = (props) => {
    
    const [name, setPersonName] = useState('')
    const [post, setPersonPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault(); // prevent page from refreshing
        
        if (!name || !post){
            return;
        }
        
        let newPost = {
            name: name,
            post: post,
        }
        // console.log(newPost)
        props.addNewPostProperty(newPost)
        
        setPersonName('');
        setPersonPost('');

    }

    return ( 
        <form onSubmit={handleSubmit} className='postform'>
            <div className='flex-container'>
                <div className='input-label'>
                    <label>Name</label>
                    <label>Post</label>
                </div>
            </div>
            <div className='input-post'>
                <div>
                    <input className='input-name-box' type="text" value={name} onChange={(event) => setPersonName(event.target.value)}/>
                    <input className='input-post-box' type="text" value={post} onChange={(event) => setPersonPost(event.target.value)}/>
                </div>
            </div>
            <div className='button'>
                <div>
                    <button type='submit'className='button-setting'>Post</button>
                </div>
            </div>

        </form>
     );
}
 
export default CreatePostForm;
