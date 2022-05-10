import React from 'react';
import logo from '../logo.svg';
import PromptForm from './atoms/Form';

const Body = () => {

  return (
    <div className="body">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <PromptForm>
          
        </PromptForm>
      </div>
    
    </div>
  )
}
  
export default Body