import React from "react";

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, value: "text" };
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState({ count: this.state.count + 1 });
	}

	decrement() {
		this.setState({ count: this.state.count - 1 });
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<h1>{this.state.value}</h1>
				<input
					type="text"
					value={this.state.value}
					onChange={(event) => {
						this.setState({ value: event.target.value });
					}}
				/>
				<button onClick={this.decrement}>Decrement</button>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default ClassCounter;
