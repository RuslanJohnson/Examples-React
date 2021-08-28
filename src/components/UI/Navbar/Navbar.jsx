import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Buttons/Button";

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem("auth");
	};

	return (
		<div className="navbar">
			<Button onClick={logout}>Log Out</Button>
			<div className="links">
				<Link to="/about">About</Link>
				<Link to="/posts">Posts</Link>
			</div>
		</div>
	);
};

export default Navbar;
