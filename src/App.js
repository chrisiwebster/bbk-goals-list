import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Goals from "./components/Goals";

const yearGoalsList = [];

const monthGoalsList = [];

const App = () => {
	const [yearGoalValue, setYearGoalValue] = useState("");
	const [yearGoals, setYearGoals] = useState(yearGoalsList);

	const [monthGoalValue, setMonthGoalValue] = useState("");
	const [monthGoals, setMonthGoals] = useState(monthGoalsList);

	//Year goal functions

	const handleOnChangeYearGoal = (e) => {
		setYearGoalValue(e.target.value);
	};

	const handleOnSubmitYearGoal = (e) => {
		e.preventDefault();

		const newGoal = {
			id: uuid(),
			title: yearGoalValue,
		};

		setYearGoals((prevState) => {
			return [...prevState, newGoal];
		});
	};

	const handleDeleteYearGoalClick = (id) => {
		const updatedYearGoals = [...yearGoals].filter((goal) => goal.id !== id);
		setYearGoals(updatedYearGoals);
	};

	// Month goal functions
	const handleOnChangeMonthGoal = (e) => {
		setMonthGoalValue(e.target.value);
	};

	const handleOnSubmitMonthGoal = (e) => {
		e.preventDefault();

		const newGoal = {
			id: uuid(),
			title: monthGoalValue,
		};

		setMonthGoals((prevState) => {
			return [...prevState, newGoal];
		});
	};

	const handleDeleteMonthGoalClick = (id) => {
		const updatedMonthGoals = [...monthGoals].filter((goal) => goal.id !== id);
		setMonthGoals(updatedMonthGoals);
	};

	return (
		<div className="App">
			<header>
				<h1>Goals App</h1>
			</header>
			<div className="goals-wrap">
				<Goals
					title="Year"
					goals={yearGoals}
					goalValue={yearGoalValue}
					handleOnChange={handleOnChangeYearGoal}
					handleOnSubmit={handleOnSubmitYearGoal}
					onDeleteClick={handleDeleteYearGoalClick}
				/>

				<Goals
					title="Month"
					goals={monthGoals}
					goalValue={monthGoalValue}
					handleOnChange={handleOnChangeMonthGoal}
					handleOnSubmit={handleOnSubmitMonthGoal}
					onDeleteClick={handleDeleteMonthGoalClick}
				/>
			</div>
		</div>
	);
};

export default App;
