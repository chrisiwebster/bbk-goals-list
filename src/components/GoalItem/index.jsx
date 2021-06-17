import React from "react";
import Button from "../Button";
import "./styles.css";

const GoalItem = ({ title, onClick }) => {
	return (
		<div className="goal-item">
			<input type="checkbox" id={title} />
			<label htmlFor={title}>{title}</label>
			<Button
				icon={<i class="fas fa-trash"></i>}
				onClick={onClick}
				className="delete"
			/>
		</div>
	);
};

export default GoalItem;
