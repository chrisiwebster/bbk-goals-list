import React from "react";

const Button = ({ title, onClick, type }) => {
  return (
    <button type={type || "button"} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
