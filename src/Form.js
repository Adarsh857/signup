import React, { useState } from 'react';
import './Form.scss';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <div className='form-left-2'>
          <img className='form-img'  src='img/main.png' alt='spaceship' />
          <div className='text3'>Choose a date range</div>
          <p className='text4'>Lorem ipsum dolor amet,consectetur<br/>adipiscing elit. Mauris impredict bibendum.</p>
          </div>
    
        </div>
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        
      </div>
    </>
  );
};

export default Form;
