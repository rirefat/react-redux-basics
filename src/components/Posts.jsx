import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // decide what to render
    let content;

    if (isLoading) {
        content = <h1>Loading posts ...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1>{error}</h1>;
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No posts found!</h1>;
    }
    if (!isLoading && !isError && posts.length > 0) {
        content = (
            <ul>
                {posts.map((post) => (
                    <li className="border p-2 mb-4 shadow-sm" key={post.id}>{post.title}</li>
                ))}
            </ul>
        );
    }

    return <>
        <h2 className="font-semibold text-xl my-4">Available Posts</h2>
        <div>{content}</div>
    </>;
}