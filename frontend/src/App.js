import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer'

// layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import VerticalNav from './components/VerticalNav'

// pages
import Homepage from "./pages/Homepage/homepage";
import Admin from './pages/Admin';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import TradingPage from "./pages/TradingPage/tradingPage"
import ArtistPage from './pages/ArtistPage/artistPage'

import "./default.scss";

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/trading-page"
          render={() => (
            <HomepageLayout>
              <TradingPage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/artist-page"
          render={() => (
            <ArtistPage />
          )}
        />
        <Route path="/registration" render={() => (
            <Registration />
        )} />
        <Route path="/login"
          render={() => (
              <Login />          
          )} />
        <Route path="/recovery" render={() => (
            <Recovery />
        )} />
        <Route path="/dashboard" render={() => (

            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
        )} />
        <Route path="/admin" render={() => (
          
              <Admin />
           
        )} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
