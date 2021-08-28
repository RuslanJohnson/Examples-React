import { useState, useEffect, useRef } from "react";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import Select from "../components/Select";
import "../styles/App.css";
import Modal from "../components/UI/Modal/Modal";
import Loader from "../components/UI/Loader/Loader";
import Button from "../components/UI/Buttons/Button";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { getPagesCount } from "../components/utils/pages";
import useFetching from "../hooks/useFetching";
import Pagination from "../components/UI/Pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const lastElement = useRef();

	const [fetchPosts, isPostLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers["x-total-count"];
			setTotalPages(getPagesCount(totalCount, limit));
		}
	);

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<div className="app">
			<Button style={{ marginTop: 10 }} onClick={() => setModal(true)}>
				Add a new post
			</Button>
			<Modal active={modal} setActive={setModal}>
				<PostForm create={createPost} />
			</Modal>
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h1>Произошла ошибка {postError}</h1>}
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				title="Posts"
			/>
			<div
				ref={lastElement}
				style={{ height: 1, backgroundColor: "teal" }}
			></div>
			{isPostLoading && <Loader />}

			<Pagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>
	);
}

export default Posts;
