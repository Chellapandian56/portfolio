import React from "react";
import './Aboutme.css'
import webdevimg from '../../assets/webdevimg.png'
import python_devimg from '../../assets/python_dev.png'
import dbimg from '../../assets/dbimg.png'

const Aboutme = ()=>{
  return (
  <section id="skills">
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">Hello, I'm a passionate Python developer dedicated to crafting efficient, user-friendly, and scalable software solutions. With 2 years of experience in the field.</span>
    <div className="skillBars">
      <div className="skillBar">
        <img src={python_devimg} alt="python" className="skillBarimg" />
        <div className="skillBartxt">
          <h2>Python Development</h2>
          <p>I specialize in Python programming, leveraging its extensive libraries and frameworks to develop robust applications tailored to meet specific client needs.</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={webdevimg} alt="web design" className="skillBarimg" />
        <div className="skillBartxt">
          <h2>Web Development</h2>
          <p>I have a strong background in web development using technologies like Django, Flask, and FastAPI, allowing me to create dynamic and interactive web applications.</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={dbimg} alt="Database" className="skillBarimg" />
        <div className="skillBartxt">
          <h2>Database Management</h2>
          <p> Skilled in designing and optimizing relational and non-relational databases, I ensure data integrity and efficiency in storage and retrieval processes.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutme;