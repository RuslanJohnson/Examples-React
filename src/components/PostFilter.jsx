import React from "react";
import Input from "./UI/Inputs/Input";
import Select from "./Select";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<>
			<Input
				placeholder="Search"
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
			/>
			<Select
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue="Sort by"
				options={[
					{ value: "title", name: "Title" },
					{ value: "body", name: "Description" },
				]}
			/>
		</>
	);
};

export default PostFilter;
