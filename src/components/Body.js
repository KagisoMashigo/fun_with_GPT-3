import React from 'react';
import logo from '../logo.svg';
import '../styles/Body.css';
import PromptCard from './atoms/Card';

const Body = () => {

  return (
    <div className="body">
      <h2 className='h2'>Responses:</h2>
      <div>
        <PromptCard>

        </PromptCard>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    
    </div>
  )
}
  
export default Body
