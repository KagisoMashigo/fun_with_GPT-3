import React from 'react';
import '../styles/Header.css';
import PromptForm from './atoms/Form';

const Header = () => {

  return (
    <div className="header">
      <h1 className='h1'>Fun with AI</h1>
      <div className='form-container'>
        <PromptForm>

        </PromptForm>
      </div>

    </div>
  )
}
  
export default Header