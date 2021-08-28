import React from "react";
import classes from "./Input.module.css";

function Input(props) {
	return <input className={classes.formInput} {...props} />;
}

export default Input;
