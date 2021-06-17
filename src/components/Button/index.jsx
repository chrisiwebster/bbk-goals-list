import React from "react";
import "./styles.css";

const Button = ({ icon, onClick, type, className }) => {
	return (
		<button type={type || "button"} onClick={onClick} className={className}>
			{icon}
		</button>
	);
};

export default Button;
