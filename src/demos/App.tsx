import React from 'react'
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom'
import logo from './assets/logo.png'
import externalLinkIcon from './assets/external-link-alt-solid.svg'
import './App.sass'
import Home from './Home'
import Components from './Components'

function App() {
  return (
    <HashRouter>
      <div className="hero soupe-ui-layout-container">
        <nav
          className="hero-head navbar soupe-ui-layout-header is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <img src={ logo } className="logo" alt=""></img>
              Soupe UI Components (React)
            </NavLink>
          </div>
          <div className="navbar-menu" id="navbar-menu">
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
                isActive={ (match, location) => {
                  if (location.pathname.startsWith('/components')) {
                    return true
                  }

                  return false
                } }
              >
                Components
              </NavLink>
              <a className="navbar-item" href="https://github.com/cheeryworks/soupe-ui-components-react">
                GitHub
                <img src={ externalLinkIcon } className="external-link-icon"/>
              </a>
            </div>
          </div>
        </nav>
        <div className="hero-body px-0 py-0 soupe-ui-layout-body hero">
          <Switch>
            <Route path="/components">
              <Components/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
        <div className="hero-foot px-1 py-1 soupe-ui-layout-footer">
          ©{ new Date().getFullYear() } Beijing CheeryWorks Technology Co., Ltd.
        </div>
      </div>
    </HashRouter>
  )
}

export default App
