import React from "react";

const VariableButton = ({ text, className, clickHandler }) => {
  return (
    <>
      <button className={className} onClick={clickHandler}>
        {text}
      </button>
    </>
  );
};

export default VariableButton;
