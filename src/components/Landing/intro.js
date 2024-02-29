import React from "react";
import './intro.css';
import { Link } from "react-scroll";
import hiremeimg from '../../assets/hireme.png'
import chellapic from '../../assets/chellapic.jpg'

const Intro = () => {
  return(
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="im">I'm <span className="name">Chellapandian</span><br />Python Developer</span>
        <p className="Intropara">I am a Python Developer</p>
        <Link><button className="btn"><img src={hiremeimg} alt="" className="btnimg"/>Hire me</button></Link>
      </div>
      <img src={chellapic} alt="" className="myimage" />
    </section>
  )
}
export default Intro;
