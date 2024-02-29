import React from "react";
import './Navbar.css';
import { Link } from "react-scroll";
import contactimg from '../../assets/contactimage.png'

const Navbar = ()=>{
  return(
    <nav className="navbar">
      <div className="descktopmenu">
        <Link className="desktopmenu">Home</Link>
        <Link className="desktopmenu">About Me</Link>
        <Link className="desktopmenu">Projects</Link>
        {/* <Link className="desktopmenu">Contact Me</Link> */}
      </div>
      <button className="desktopmenubtn">

      <img src={contactimg} alt="" className="desktopmenuimg" />Contact Me</button>
    </nav>
  )
}

export default Navbar