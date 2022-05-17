import React from 'react';
import '../styles/Body.css';
import PromptForm from './atoms/Form';

const Body = () => {

  return (
    <div className="body">
      <div className='form-container'>
        <PromptForm>
        </PromptForm>
      </div>    
    </div>
  )
}
  
export default Body
