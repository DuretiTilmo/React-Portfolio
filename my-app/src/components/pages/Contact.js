import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact(){
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } 
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
  };

    return (

 <div className="container">
      <form className="contact">
      <label>Name:</label>
      <input
          // value={name}
          name="name"
          type="text"
          placeholder="Name"
        />
          <label>Email Adress:</label>
        <input
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="Email"
        />
          <label>Message:</label>
        <textarea 
        name="message" 
        rows="4" 
        cols="50">

        </textarea>
         <button type="button" onClick={handleFormSubmit}>
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