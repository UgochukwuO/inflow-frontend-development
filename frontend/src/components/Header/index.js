import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Logo from './../../assets/logo.png';


const Header = props => {
  
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">

          <ul>

            
              <li key={1}>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>,
              <li key={2}>
                <span>
                  LogOut
                </span>
              </li>
            

           
              <li key={3}>
                <Link to="/registration">
                  Register
                </Link>
              </li>,
              <li key={4}>
                <Link to="/login">
                  Login
                </Link>
              </li>
            

          </ul>





        </div>
      </div>
    </header>
  );
};

export default Header;
