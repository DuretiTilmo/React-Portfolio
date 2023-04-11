import React from 'react';

export default function About(){
    return (
<div className="container mt-4 pt-4"> 

<h2> About Me</h2>
<div className="row"> 
<div className="col-lg-3 col-md-6 col-sm-9">
<img src={require("../../assets/IMG-0196.jpg")} alt="profile" className="profilePic"/> 
</div>
<div className="col-lg-9 col-md-6 col-sm-9"> 
<p>
I am a boot camp graduate in Full Stack Web Development program. As a young woman new to tech, I am confident that I now have a solid understanding of coding and web development. Even though I have zero experience with IT, I am very committed to web development. Before I joined boot camp I dedicated myself for months to teaching myself how to write code on my own from scratch and built a web page through LinkedIn learning and being consistent with my practices. And now, I am very eager to apply my knowledge to software development that meets the needs of my clients, which makes me an excellent addition to any organization seeking to hire a junior developer.

</p>
</div>
</div>
</div> 
)};
