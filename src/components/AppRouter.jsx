import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "./context/AuthContext";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader />;
	}

	return isAuth ? (
		<Switch>
			{privateRoutes.map((route) => (
				<Route
					key={route.path}
					component={route.component}
					exact={route.exact}
					path={route.path}
				/>
			))}
			<Redirect to="/Posts" />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map((route) => (
				<Route
					key={route.path}
					component={route.component}
					exact={route.exact}
					path={route.path}
				/>
			))}
			<Redirect to="/Login" />
		</Switch>
	);
};

export default AppRouter;
