import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
// import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

function Navbar() {
  const [OpenLinks, setOpenLinks] = useState(false);
  const hambugerBtn = () => {
    setOpenLinks(!OpenLinks);
    console.log("clicked");
    // useEffect(() => setOpenLinks(!OpenLinks), []);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={OpenLinks ? "open" : "close"}>
        <img src={logo} alt="" />
        <div className="hiddenLinks">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      <h2 className="h-title">TECAS</h2>
      <div className="rightSide">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <button onClick={hambugerBtn}>
        <div className="hambuger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </button>
    </div>
  );
}

export default Navbar;
