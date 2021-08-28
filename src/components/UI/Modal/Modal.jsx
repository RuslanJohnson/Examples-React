import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, active, setActive }) => {
	const rootClasses = [cl.modal];

	if (active) {
		rootClasses.push(cl.active);
	}

	return (
		<div className={rootClasses.join(" ")} onClick={() => setActive(false)}>
			<div className={cl.content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
