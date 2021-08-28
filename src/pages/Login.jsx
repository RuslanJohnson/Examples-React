import Input from "../components/UI/Inputs/Input";
import Button from "../components/UI/Buttons/Button";
import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const login = (event) => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem("auth", isAuth);
	};
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={login}>
				<Input type="text" placeholder="Enter Name" />
				<Input type="password" placeholder="Enter Password" />
				<Button>Login</Button>
			</form>
		</div>
	);
};

export default Login;
