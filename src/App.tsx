import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./assets/logo.png";
import "./App.scss";
import Home from "./pages/Home";
import Components from "./pages/Components";

function App() {
  return (
    <Router>
      <div className="hero soupe-ui-layout-container">
        <nav className="hero-head navbar soupe-ui-layout-header is-dark">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <img src={logo} className="logo" alt=""></img>
              Soupe UI Components (React)
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                to="/"
                exact
                activeClassName="is-active"
              >
                Home
              </NavLink>
              <NavLink
                className="navbar-item"
                to="/components"
                exact
                activeClassName="is-active"
              >
                Components
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="hero-body px-0 py-0 soupe-ui-layout-body hero">
          <Switch>
            <Route path="/components">
              <Components />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div className="hero-foot px-1 py-1 soupe-ui-layout-footer">
          ©2020 CheeryWorks, Ltd.
        </div>
      </div>
    </Router>
  );
}

export default App;
