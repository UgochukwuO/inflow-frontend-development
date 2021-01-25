import React from "react";
import { Switch, Route, Link } from "react-router-dom";

//components
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer'

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage/homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import TradingPage from "./pages/TradingPage/tradingPage"
import ArtistPage from './pages/ArtistPage/artistPage'
import EcoManagePage from './pages/EcoManagePage/ecoManagePage'
import LabelPage from "./pages/LabelPage/labelPage";
import Wallet from "./pages/Wallet/wallet";
import "./default.scss";
import Logo from "./components/Logo/logo";


const App = (props) => {
  return (
    <div className="App">
      <Link to='/'>
        <Logo/>
      </Link>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/trading-page"
          render={() => (
            <MainLayout>
              <TradingPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/artist-page"
          render={() => (
            <MainLayout>
              <ArtistPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/eco-manage-page"
          render={() => (
            <EcoManagePage />
          )}
        />
        <Route
          exact
          path="/label"
          render={() => (
            <LabelPage />
          )}
        />
        <Route
          exact
          path="/wallet"
          render={() => (
            <Wallet />
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
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
