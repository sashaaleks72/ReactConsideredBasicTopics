import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import { useFetching } from "../hooks/useFetching";

const PostInfo = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPost, isPostLoading, fetchPostError] = useFetching(async () => {
        if (id) {
            const recievedPost = await PostService.getPostById(id);
            setPost(recievedPost);
        }
    });

    const [fetchPostComments, isCommentsLoading, fetchCommentsError] =
        useFetching(async () => {
            if (id) {
                const recievedComments = await PostService.getPostCommentsById(
                    id
                );
                setComments(recievedComments);
            }
        });

    useEffect(() => {
        fetchPost();
    }, []);

    useEffect(() => {
        fetchPostComments();
    }, []);

    return (
        <div>
            {fetchPostError && <h2>Error msg: {fetchPostError}</h2>}
            {fetchCommentsError && <h2>Error msg: {fetchCommentsError}</h2>}

            {!isPostLoading ? (
                <div>
                    <h2>Post info: </h2>
                    <div className="post-info">
                        <div className="post-info__title">
                            <span>Title:</span> {post.title}
                        </div>
                        <div className="post-info__body">
                            <span>Description:</span> {post.body}
                        </div>
                    </div>
                </div>
            ) : (
                <MyLoader />
            )}

            {!isCommentsLoading ? (
                <div>
                    <h2 style={{ marginTop: "10px" }}>Comments: </h2>
                    <div className="comments">
                        {comments.map((comment) => (
                            <div className="comment" key={comment.email}>
                                <div className="comment__nickname">
                                    <span>Nickname: </span>
                                    {comment.name}
                                </div>
                                <div className="comment__body">
                                    <span>Comment: </span>
                                    {comment.body}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <MyLoader />
            )}
        </div>
    );
};

export default PostInfo;
