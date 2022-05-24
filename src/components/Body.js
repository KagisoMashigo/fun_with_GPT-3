import React from "react";
import PromptForm from "./atoms/Form";
import "../styles/Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="form-container">
        <PromptForm />
      </div>
    </div>
  );
};

export default Body;
