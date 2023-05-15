import '../PostList/PostList.css'

const PostList = (props) => {
    return ( 
        <div className='postlist'>
            <table>
                <thead>
                {props.parentEntries.map((entry) => {
                    return (
                    <tr>
                        <td>Name</td>
                        <td>{entry.name}</td>
                    </tr>
                    )
                })}
                </thead>
                <tbody>
                {props.parentEntries.map((entry) => {
                    return (
                    <tr>
                        <td>Post</td>
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