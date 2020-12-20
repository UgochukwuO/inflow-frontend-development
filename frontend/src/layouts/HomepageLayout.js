import React from 'react';
import { Link } from 'react-router-dom'
import Header from './../components/Header';
import Footer from './../components/Footer';
import VerticalNav from './../components/VerticalNav';
import Homepage from '../pages/Homepage/homepage';
/*
   <VerticalNav>
      <ul>
              <li>
                <Link to="/dashboard">
                  Home
                </Link>
              </li>
              <li>
              <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
      </VerticalNav>
      {props.children}
 */
const HomepageLayout = props => {
  return (
    <div className="home">
      {props.children}
    </div>
  );
};

export default HomepageLayout;
