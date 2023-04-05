import React from 'react';

function Navigation(){
    return (
        <section>
        <nav className="navbar">
            <h1> Dureti Kadir</h1>
            <a href="#about"> About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact"> Contact </a>
            <a href="#resume"> Resume</a>

        </nav>

        <div className="about">
            <h2> About Me</h2>
            {/* <img src="">  */}
            <p>
            I am a boot camp graduate with Full Stack Web Development. As a young woman new to tech, I am confident that I now have a solid understanding of coding and web development. Even though I have zero experience with IT, I am very committed to web development. Before I joined boot camp I dedicated myself for months to teaching myself how to write code on my own from scratch and built a web page through LinkedIn learning and being consistent with my practices. And now, I am very eager to apply my knowledge to software development that meets the needs of my clients, which makes me an excellent addition to any organization seeking to hire a junior developer.

            </p>
        </div> 

        <div>
      <form className="form">
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
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        {/* <button type="button" onClick={handleFormSubmit}>
          Submit
        </button> */}
      </form>
        </div>
        </section>
    )
};

export default Navigation;