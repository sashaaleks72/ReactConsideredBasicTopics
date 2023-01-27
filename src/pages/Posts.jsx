import React, { useEffect, useRef, useState } from "react";
import { PostService } from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyBtn from "../components/UI/MyBtn/MyBtn";
import MyLoader from "../components/UI/MyLoader/MyLoader";
import MyModal from "../components/UI/MyModal/MyModal";
import MyPagination from "../components/UI/MyPagination/MyPagination";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import "../styles/App.css";
import { getQuantityOfPages } from "../utils/pages";

function Posts() {
    const [posts, setPosts] = useState([]);

    const [options] = useState([
        { value: "title", title: "Sort by title" },
        { value: "body", title: "Sort by body" },
    ]);

    const [filter, setFilter] = useState({ sortField: "", searchQuery: "" });
    const [isModalActive, setIsModalActive] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [quantityOfPages, setPagesQuantity] = useState(0);

    const [fetchPosts, isPostsLoading, fetchError] = useFetching(async () => {
        const res = await PostService.getAllPosts(page, limit);

        if (res.headers["x-total-count"]) {
            const pages = getQuantityOfPages(
                res.headers["x-total-count"],
                limit
            );

            setPagesQuantity(pages);
        }

        setPosts([...posts, ...res.data]);
    });

    const observingElement = useRef();

    const addNewPost = (newPost) => {
        setPosts([...posts, newPost]);
        setIsModalActive(false);
    };

    const delCurrPost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    const sortedAndSearchedList = usePosts(
        posts,
        filter.sortField,
        filter.searchQuery
    );

    useEffect(() => {
        const init = async () => {
            await fetchPosts();
        };

        init();
    }, [page]);

    useObserver(observingElement, isPostsLoading, page < quantityOfPages, () =>
        setPage(page + 1)
    );

    return (
        <div className="content">
            <MyBtn onClick={() => setIsModalActive(true)}>Add new post</MyBtn>
            <MyModal visible={isModalActive} setVisible={setIsModalActive}>
                <PostForm addPost={addNewPost} />
            </MyModal>

            <hr style={{ margin: "10px 0" }} />
            <PostFilter
                options={options}
                filter={filter}
                setFilter={setFilter}
            />

            {fetchError && <h2>Error msg: {fetchError}</h2>}

            {isPostsLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                    }}
                >
                    <MyLoader />
                </div>
            )}

            <PostList
                posts={sortedAndSearchedList}
                title={"All posts"}
                delPost={delCurrPost}
            />
            <div ref={observingElement}></div>

            <MyPagination
                quantityOfPages={quantityOfPages}
                page={page}
                setPage={setPage}
            />
        </div>
    );
}

export default Posts;
