import GoalsForm from "../GoalsForm";
import GoalsList from "../GoalsList";

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
      <h2>{`${title} Goals`}</h2>

      <GoalsForm
        value={goalValue}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      <GoalsList goals={goals} onClick={onDeleteClick} />
    </div>
  );
};

export default Goals;
