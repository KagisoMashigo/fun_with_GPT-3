import { useState, React, useRef, useEffect } from "react";
import VariableButton from "./Button";
import ResponseCard from "./Card";
import { Configuration, OpenAIApi } from "openai";
import "../../styles/Form.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LoadingSpinner from "./Spinner";
require("dotenv").config();
const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

const PromptForm = ({ props }) => {
  const formInputRef = useRef();
  const [promptRequest, setPromptRequest] = useState("");
  const [promptDataArray, setPromptDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const storedCompletionText = localStorage.getItem("initial-responses");
  const parseStoredText = JSON.parse(storedCompletionText);
  const [engineName, setEngineName] = useState("");
  const [engineList, setEngineList] = useState([]);
  const [engine, setEngine] = useState("text-curie-001");
  const url = `https://api.openai.com/v1/engines/${engine}/completions`;

  const requestBody = {
    prompt: promptRequest,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  useEffect(() => {
    fetchEngines();
  }, []);

  const showEngines = async () => {
    const configuration = new Configuration({
      organization: "org-Y5B8Mx5ULmcwfCq6DWvocRfy",
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.listEngines();
    return response;
  };

  const fetchEngines = async () => {
    const engines = [];

    await showEngines().then((list) => engines.push(...list.data.data));
    setEngineList(engines);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postRequest();
    setPromptRequest("");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPromptRequest(value);
  };

  const handleEngineChange = (event) => {
    setEngineName(event.target.value);
    setEngine(event.target.value);
  };

  const postRequest = async () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
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
        formInputRef.current.value = "";
        setPromptRequest("");
        setIsLoading(false);
      });
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={submitForm}>
        <label className="input-label">Enter a prompt:</label>
        <textarea
          className="text-field"
          type="text"
          required
          ref={formInputRef}
          onChange={handleChange}
        />
        <div className={"button-div"}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              sx={{ mt: 2, minWidth: 120, color: "white" }}
              size="small"
            >
              <InputLabel id="engine-select-label">Engine</InputLabel>
              <Select
                labelId="engine-select-label"
                id="dropdown"
                value={engineName}
                label="A.I. Engine"
                onChange={handleEngineChange}
              >
                {engineList.map((engineName, index) => {
                  return (
                    <MenuItem key={index} value={engineName.id}>
                      {engineName.id}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <VariableButton className={"button-submit"} text={"Submit"} />
        </div>
      </form>

      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
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
