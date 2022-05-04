import React, {ComponentProps} from 'react'
import {Navigate, NavLink, Route, Routes, useLocation, useMatch, useResolvedPath} from 'react-router-dom'
import logo from './assets/logo.png'
import externalLinkIcon from './assets/external-link-alt-solid.svg'
import './App.sass'
import Home from './Home'
import Components from './Components'
import SelectDemo from "./components/select/SelectDemo";
import Introduction from "./components/Introduction";
import TreeDemo from "./components/tree/TreeDemo";
import TreeSelectDemo from "./components/tree-select/TreeSelectDemo";
import TableDemo from "./components/table/TableDemo";
import TagDemo from "./components/tag/TagDemo";
import ContextMenuDemo from "./components/context-menu/ContextMenuDemo";
import MessageBoxDemo from "./components/message-box/MessageBoxDemo";
import CardDemo from "./components/card/CardDemo";
import AccordionDemo from "./components/accordion/AccordionDemo";
import WizardDemo from "./components/wizard/WizardDemo";
import DatePickerDemo from "./components/date-picker/DatePickerDemo";

function App() {
  let location = useLocation();
  let match = useMatch({ path: location.pathname});

  return (
    <div className="hero soupe-ui-layout-container">
      <nav
        className="hero-head navbar soupe-ui-layout-header is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img src={logo} className="logo" alt=""></img>
            Soupe UI Components (React)
          </NavLink>
        </div>
        <div className="navbar-menu" id="navbar-menu">
          <div className="navbar-start">
            <NavLink
              className={({isActive}) => "navbar-item" + (isActive ? " is-active" : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) => "navbar-item" + (isActive ? " is-active" : "")}
              to="/components"
            >
              Components
            </NavLink>
            <a className="navbar-item" href="https://github.com/cheeryworks/soupe-ui-components-react">
              GitHub
              <img src={externalLinkIcon} className="external-link-icon"/>
            </a>
          </div>
        </div>
      </nav>
      <div className="hero-body px-0 py-0 soupe-ui-layout-body hero">
        <Routes>
          <Route path="/components" element={<Components/>}>
            <Route path='select' element={<SelectDemo/>} />
            <Route path='tree' element={<TreeDemo/>}/>
            <Route path='tree-select' element={<TreeSelectDemo/>}/>
            <Route path='table' element={<TableDemo/>}/>
            <Route path='tag' element={<TagDemo />} />
            <Route path='context-menu' element={<ContextMenuDemo />} />
            <Route path='message-box' element={<MessageBoxDemo />} />
            <Route path='card' element={<CardDemo />} />
            <Route path='accordion' element={<AccordionDemo />} />
            <Route path='wizard' element={<WizardDemo />} />
            <Route path='date-picker' element={<DatePickerDemo />} />
            <Route path='introduction' element={<Introduction/>} />
          </Route>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <div className="hero-foot px-1 py-1 soupe-ui-layout-footer">
        ©{new Date().getFullYear()} Beijing CheeryWorks Technology Co., Ltd.
      </div>
    </div>
  )
}

export default App
