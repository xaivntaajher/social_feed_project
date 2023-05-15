import React, { useState } from 'react';
import '../PostList/PostList.css'

const PostList = (props) => {
  
    return ( 
        <div className='postlist'>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
                </thead>
                <tbody>
                {props.parentEntries.map((entry) => {
                    return (
                    <tr>
                        <td>{entry.name}</td>
                        <td>{entry.post}</td>
                    </tr>
                    )
                })}
                </tbody>
             </table>
        </div>
     );
}
 
export default PostList;