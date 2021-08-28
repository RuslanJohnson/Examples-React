import React from "react";
import classes from "./Button.module.css";

function Button({ children, ...props }) {
	return (
		<button {...props} className={classes.formBtn}>
			{children}
		</button>
	);
}

export default Button;
