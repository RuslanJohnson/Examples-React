import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import Loader from "./UI/Loader/Loader";

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPost, isPostLoading, PostError] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchComments, isCommentLoading, CommentError] = useFetching(
		async (id) => {
			const response = await PostService.getCommentsByPostId(id);
			setComments(response.data);
		}
	);

	useEffect(() => {
		const id = params.id;

		fetchPost(id);
		fetchComments(id);
	}, []);

	return (
		<div className="postPage">
			<h1>Post Id: {params.id} </h1>
			{isPostLoading ? (
				<Loader />
			) : (
				<div>
					<strong>{post.title}</strong>
					<p>{post.body}</p>
				</div>
			)}

			<div className="comments">
				<h1>Comments</h1>
				{isCommentLoading ? (
					<Loader />
				) : (
					<>
						{comments.map((comment) => (
							<div key={comment.id} className="comment">
								<h3>Name: {comment.name}</h3>
								<h4>Email: {comment.email}</h4>
								<div>{comment.body}</div>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default PostIdPage;
