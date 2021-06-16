import React from "react";
import Button from "../Button";

const GoalItem = ({ title, onClick }) => {
  return (
    <div className="goal-item">
      <input type="checkbox" id={title} />
      <label htmlFor={title}>{title}</label>
      <Button title="Delete" onClick={onClick} />
    </div>
  );
};

export default GoalItem;
