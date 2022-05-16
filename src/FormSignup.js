import React , {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.scss';

const FormSignup = ({ submitForm }) => {
  const [agree, setAgree] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         Create an account
        </h1>
       
        <div className='form-inputs'>
          <label className='form-label'> Your Email address</label>
          <input
            className='form-input'
            type='email'
            name='email'
         
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Your Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
        
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm  your Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
         
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Your full name</label>
          <input
            className='form-input'
            type='text'
            name='username'
       
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Your phone number</label>
          <input
            className='form-input'
            type='value'
            name='mobile'
       
            value={values.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>
        <div className="App">
      <div className="container">
        <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label react="agree"> I read and agree Terms and Conditions</label>
        </div>

     
       
      </div>
    </div>
  
     
   
        <button className='form-input-btn' type='submit'>
          Create account
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
