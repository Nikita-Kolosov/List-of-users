import { useSelector, useDispatch } from "react-redux";

const Blog = () => {
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    const removeComment = (comment) => {
        dispatch({
            type: 'REMOVE_COMMENT',
            payload: comment.id
        });
    };

    return (
        <div>
            {comments.length > 0 ?
                <div>
                    {comments.map(comment => {
                        return <>
                                    <div>
                                        <div style={{marginTop:15}}>{comment.name}</div>
                                        <div>{comment.email}</div>
                                        <div>{comment.body}</div>
                                    </div>
                                    <button onClick={() => removeComment(comment)}>Remove comment</button>
                                </>
                    })}
                </div> :
                <div>No comments</div>}
        </div>
        
    );
};

export default Blog;