import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2 className="h2">Fun with A.I.</h2>
      <div className="app-description">
        GPT-3 is a powerful AI model created by{" "}
        <a href="https://openai.com/api/">OpenAI</a>. It can process plain text
        prompts and produce outputs that are hard to distinguish from human
        writing. Check out some{" "}
        <a href="https://beta.openai.com/examples/">examples</a> of what it can
        do then come right back and give it a shot!
      </div>
    </div>
  );
};

export default Header;
