import { FaRegUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import element from "../assets/element.png";
import logo from "../assets/LOGO.png";
import icon from "../assets/icon.png";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [Menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_1">
        <div>
          <img src={element} alt="icon" />
          <div>Lorem ipsum dolor</div>
        </div>
        <div>
          <img src={element} alt="icon" />
          <div>Lorem ipsum dolor</div>
        </div>
        <div>
          <img src={element} alt="icon" />
          <div>Lorem ipsum dolor</div>
        </div>
      </div>
      <div className="navbar_2">
        <div style={{alignItems:"center"}}>
          <div onClick={() => setMenu(!Menu)} >
            <IoMenuOutline className="menu" />
          </div>
          <img className="brandlogo" src={icon} alt="icon" />
        </div>
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div>
          <RiSearch2Line className="icon" />
          <AiOutlineHeart className="icon" />
          <BsHandbag className="icon" />
          <div className="hideicon" >
          <FaRegUser className="icon" />
        
            <b >ENG <IoIosArrowDown  /></b>
            </div> 
        </div>
      </div>
      <div  className={`navbar_3 ${Menu ? "menu_container" : ""}`}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
    </div>
  );
}

export default Navbar;
