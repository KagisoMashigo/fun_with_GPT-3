import * as React from "react";
import "../../styles/Card.css";

const ResponseCard = ({ responseData }) => {
  const savedResponsesString = localStorage.getItem("initial-responses");
  const parseSavedResponses = JSON.parse(savedResponsesString);

  return (
    <section className="response-container">
      <h2 className="response-header">Responses:</h2>

      {!parseSavedResponses
        ? responseData.map((response, index) => {
            return (
              <div className="card card-1" key={index}>
                <p className="card-title">
                  <strong className="bold">Prompt: </strong>
                  {response.promptRequest}
                </p>
                <p className="card-subtitle">
                  <strong className="bold">Response: </strong>
                  {response.completionResponse}
                </p>
              </div>
            );
          })
        : parseSavedResponses.map((response, index) => {
            return (
              <div className="card card-1" key={index}>
                <p className="card-title">
                  <strong className="bold">Prompt: </strong>
                  {response.promptRequest}
                </p>
                <p className="card-subtitle">
                  <strong className="bold">Response: </strong>
                  {response.completionResponse}
                </p>
              </div>
            );
          })}
    </section>
  );
};

export default ResponseCard;