import GoalsForm from "../GoalsForm";
import GoalsList from "../GoalsList";

import "./styles.css";

const Goals = ({
	title,
	goalValue,
	handleOnChange,
	handleOnSubmit,
	goals,
	onDeleteClick,
}) => {
	return (
		<div className="goals">
			<h2>{`${title} goals`}</h2>

			<GoalsForm
				value={goalValue}
				onChange={handleOnChange}
				onSubmit={handleOnSubmit}
			/>
			<GoalsList goals={goals} onDeleteClick={onDeleteClick} />
		</div>
	);
};

export default Goals;
