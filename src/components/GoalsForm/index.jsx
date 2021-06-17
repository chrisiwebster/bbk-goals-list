import React from "react";
import Button from "../Button";

import "./styles.css";

const GoalsForm = ({ onSubmit, value, onChange }) => {
	return (
		<div className="goals-form">
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={onChange} />
				<Button
					type="submit"
					icon={<i class="fas fa-plus"></i>}
					className="add"
				/>
			</form>
		</div>
	);
};

export default GoalsForm;
