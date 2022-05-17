import { useState, React, useRef } from "react";
import VariableButton from "./Button";
import ResponseCard from "./Card";
import { Configuration, OpenAIApi } from "openai";
import "../../styles/Form.css";

require("dotenv").config();

const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

const PromptForm = ({ props }) => {
  const formInputRef = useRef();
  const [promptRequest, setPromptRequest] = useState("");
  const [promptDataArray, setPromptDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const storedCompletionText = localStorage.getItem("initial-responses");
  const parseStoredText = JSON.parse(storedCompletionText);

  const requestBody = {
    prompt: promptRequest,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const showEngines = async () => {
    const configuration = new Configuration({
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    // console.log(response.data.data);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postRequest();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    // showEngines();
    setPromptRequest(value);
  };

  const postRequest = async () => {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((result) => result.json())
      .then((result) => {
        const completionResponse = result.choices[0].text;

        if (storedCompletionText) {
          parseStoredText.unshift({ promptRequest, completionResponse });
          let reconvertedSavedResponses = JSON.stringify(parseStoredText);
          localStorage.setItem("initial-responses", reconvertedSavedResponses);
        } else {
          setPromptDataArray([
            { promptRequest, completionResponse },
            ...promptDataArray,
          ]);

          localStorage.setItem(
            "initial-responses",
            JSON.stringify([
              { promptRequest, completionResponse },
              ...promptDataArray,
            ])
          );
        }

        setPromptRequest("");
        setIsLoading(false);
      });
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={submitForm}>
        <label className="input-label">Enter a prompt, do it:</label>
        <textarea
          className="text-field"
          type="text"
          required
          ref={formInputRef}
          onChange={handleChange}
        />
        <div className={"button-div"}>
          <VariableButton className={"button-submit"} text={"Submit"} />
        </div>
      </form>

      {isLoading ? (
        <h1>LOADING</h1>
      ) : (
        <ResponseCard responseData={promptDataArray} />
      )}

      {!storedCompletionText ? (
        <div className="empty-list">
          <img
            src="https://memegenerator.net/img/instances/43752070.jpg"
            alt="Looks like our meme is on vacay, your prompts will appear here."
          ></img>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default PromptForm;
