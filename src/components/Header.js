import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="h2">Fun with A.I.</h2>
      <div className="app-description">
        GPT-3 is a powerful A.I. model created by{" "}
        <a href="https://openai.com/api/" target="_blank" rel="noreferrer">
          OpenAI
        </a>
        . It can process plain text prompts and produce outputs that are hard to
        distinguish from human writing. Check out some{" "}
        <a
          href="https://beta.openai.com/examples/"
          target="_blank"
          rel="noreferrer"
        >
          examples
        </a>{" "}
        of what it can do then come right back and give it a shot!
      </div>
      <br></br>
      <div>
        To create a satisfying prompt it is important to use plain language and
        to be descriptive. I would recommend reading these{" "}
        <a href="https://openai.com/api/" target="_blank" rel="noreferrer">
          guidelines
        </a>{" "}
        on how to design one based on the engine you want to use.
      </div>
    </div>
  );
};

export default Header;
