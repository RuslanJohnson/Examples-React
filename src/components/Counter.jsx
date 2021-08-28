import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [value, setValue] = useState("Input text");

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

	return (
		<div>
			<h1>{count}</h1>
			<h1>{value}</h1>
			<input
				type="text"
				value={value}
				onChange={(event) => {
					setValue(event.target.value);
				}}
			/>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default Counter;
