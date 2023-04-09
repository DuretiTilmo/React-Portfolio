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
      setErrorMessage('Invalid Email Address! Please try again');
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
          required
        />
          <label>Email Adress:</label>
        <input
          value={email}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="Email"
          required        
        />
          <label>Message:</label>
        <textarea 
        name="message" 
        rows="4" 
        cols="50"
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