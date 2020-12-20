import React from "react";
import UserProfile from "./../UserProfile";
import { Link } from "react-router-dom";
import "./styles.scss";

/*
<ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
*/

const VerticalNav = ({ children }) => {
  return (
    <div className="verticalNav">
      
      <UserProfile />

      
          
      <div className="menu">{children}</div>
    </div>
  );
};

export default VerticalNav;
