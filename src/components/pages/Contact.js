import React from 'react';
import { useState } from 'react';
// we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function Contact(){
    // We are creating state variables for the fields of the form and setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [emailError, setEmailError] = useState('');
  const [inputError, setInputError] = useState('');

  // to get the value and name of the input which triggered the change
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

   // by checking the input type, we set the state weather if it is email, name, or a message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setInput(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit i.e to refresh the page
    e.preventDefault();
//checks weather the email entered is valid or not. If it's invalid send error message
    if (!validateEmail(email)) {
      setEmailError(true);
   return;
    }
//checks weather or not a message is entered 
    if (!input) {
      setInputError(true);
      return;
    }
// checks if these three fields are filled out or not. If not, sending error message
    if (!name && !email && !input) {
      setErrorMessage("Please fill out the form!")
      return;
    }   
    setName('');
    setEmail('');
    setInput('');
    setEmailError('');
    setInputError('');
  };
    return (

 <div className="container">
      <form className="contact">
      <label>Name:</label>
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