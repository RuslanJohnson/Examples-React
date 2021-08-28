import React, { useState } from "react";
import Button from "./UI/Buttons/Button";
import Input from "./UI/Inputs/Input";

function PostForm({ create }) {
	const [post, setPost] = useState({ title: "", desc: "" });

	function addNewPost(event) {
		event.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: "", desc: "" });
	}

	return (
		<form>
			<Input
				type="text"
				value={post.title}
				placeholder="Title"
				onChange={(e) => setPost({ ...post, title: e.target.value })}
			/>
			<Input
				type="text"
				value={post.desc}
				placeholder="Decription"
				onChange={(e) => setPost({ ...post, desc: e.target.value })}
			/>
			<Button onClick={addNewPost}>Add Post</Button>
		</form>
	);
}

export default PostForm;
