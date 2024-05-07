import { BODY_LOGO } from "../Utils/constants";
import { useState } from "react";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={BODY_LOGO}></img>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
