import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, delPost }) => {
    if (!posts.length) {
        return <div>There are no posts!</div>;
    }

    return (
        <div>
            <div
                style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {title}
            </div>
            <div className="posts">
                <TransitionGroup>
                    {posts.length &&
                        posts.map((post, index) => (
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="item"
                            >
                                <PostItem
                                    id={post.id}
                                    num={index + 1}
                                    title={post.title}
                                    body={post.body}
                                    delPost={delPost}
                                />
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;
