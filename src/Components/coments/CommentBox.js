import Comment from './Comment';
import PostComment from './PostComment';
import {useEffect, useState, useContext} from "react";
import {LocalContext} from '../../Context'
import {Link} from "react-router-dom";


export default function CommentBox({
                                       pageId
                                   }) {

    let [comments, setComments] = useState([]);
    const [setItem, getItem] = useContext(LocalContext);

    function fetchComments(){
        fetch(
            `http://localhost:1337/api/comment-manager/comments/${pageId}`
        )
            .then((response) => response.json())
            .then((data) => {
                setComments(data.comments || {})
            });
    }

    useEffect(() => {
        fetchComments()
    }, [pageId]);

    return (
        <>
            {

                <section className="max-w-2xl px-4 py-10 mx-auto">
                    {
                        (getItem() && getItem().user)
                            ?
                            <PostComment pageId={pageId} onPostComment={fetchComments}/>
                            :
                            <div className='pb-2'><Link to="/login" className='text-red-500'>Log in</Link> to leave a
                                comment</div>}
                    {
                        comments.length > 0
                            ?
                            comments.map(comment => <Comment key={comment.id} username={comment.author.username}
                                                             date={comment.updatedAt} content={comment.content}/>)
                            :
                            <div className='italic'>There are no comments yet for this page</div>
                    }
                </section>
            }
        </>

    )

}