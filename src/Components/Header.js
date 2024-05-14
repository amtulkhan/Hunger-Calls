import { BODY_LOGO } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={BODY_LOGO}></img>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
            className="loginButton"
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
