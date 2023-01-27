import { useNavigate } from "react-router-dom";
import MyBtn from "./UI/MyBtn/MyBtn";

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <div className="post__title">
                    {props.id}. {props.title}
                </div>
                <div className="post__desc">{props.body}</div>
            </div>
            <div className="post__btns">
                <MyBtn onClick={() => navigate(`/posts/${props.id}`)}>
                    Open
                </MyBtn>
                <MyBtn onClick={() => props.delPost(props.id)}>Delete</MyBtn>
            </div>
        </div>
    );
};

export default PostItem;
