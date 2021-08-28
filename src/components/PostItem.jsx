import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./UI/Buttons/Button";

function PostItem(props) {
	const removePost = () => {
		props.remove(props.post);
	};

	const router = useHistory();

	return (
		<div className="post">
			<div className="post__content">
				<b>
					{props.post.id} {props.post.title}
				</b>
				<div> {props.post.body} </div>
			</div>
			<div className="post__btns">
				<Button onClick={() => router.push(`/posts/${props.post.id}`)}>
					Open
				</Button>
				<Button onClick={removePost}>Remove</Button>
			</div>
		</div>
	);
}

export default PostItem;
