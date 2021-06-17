import React from "react";
import GoalItem from "../GoalItem";

const GoalsList = ({ goals, onDeleteClick }) => {
	return (
		<div className="goals-list">
			{goals.map((goal) => (
				<GoalItem
					key={goal.id}
					title={goal.title}
					onClick={() => onDeleteClick(goal.id)}
				/>
			))}
		</div>
	);
};

export default GoalsList;
