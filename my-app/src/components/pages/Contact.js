import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact(){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [input, setInput] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setInput(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || email) {
      setEmailError(true);
      // return;
    }
    if (!name) {
      setNameError(true);
    }
    if (!input) {
      setInputError(true);
    }
    if (!name && !email && !input) {
      setErrorMessage("Please fill out the form!")
    }
  };

    return (

 <div className="container">
      <form className="contact">
      <label>Name:</label>
      {nameError && ( <span className="span">Please enter your name! </span>)}

      <input
          name="name"
          type="text"
          placeholder="Name"
          required
        />
          <label>Email Adress:</label>
          {emailError && ( <span className="span">Please enter a valid Email Address!</span>)}

        <input
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="Email"
          required        
        />

          <label>Message:</label>
          {inputError && ( <span className="span">This field is required!</span>)}

        <textarea 
        name="message" 
        rows="4" 
        cols="50"
        onChange={handleInputChange}
        required
        >

        </textarea >
         <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
          Submit
         </button> 
    </form> 

    {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      
    )};