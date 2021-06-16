import React from "react";
import Button from "../Button";

const GoalsForm = ({ onSubmit, value, onChange }) => {
  return (
    <div className="goals-form">
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <Button type="submit" title="Add Goal" />
      </form>
    </div>
  );
};

export default GoalsForm;
