import React from 'react';
// import "../../styles/Button.css";


const VariableButton = ( {text, className, clickHandler} ) => {
  return (
    <>
        <button className={className} onClick={clickHandler} >
            {text}
        </button>
    </>
  )
}

export default VariableButton;

