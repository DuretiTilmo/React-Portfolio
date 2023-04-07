import React from 'react';

export default function Contact(){
    return (

 <div className="container">
      <form className="contact">
      <label>Name:</label>
      <input
        //   value={name}
          name="name"
          type="text"
          placeholder="Name"
        />
          <label>Email Adress:</label>
        <input
        //   value={email}
          name="email"
          type="email"
          placeholder="email"
        />
          <label>Message:</label>
        <textarea 
        name="message" 
        rows="4" 
        cols="50">

        </textarea>
         {/* <button type="button" onClick={handleFormSubmit}>
          Submit
         </button>  */}
    </form> 
</div> 
    )};