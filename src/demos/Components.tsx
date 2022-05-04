import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './Components.scss'

function Components() {
  return (
    <div className='tile hero-body px-0 py-0 soupe-ui-layout-sidebar'>
      <div className='tile is-vertical is-3 pl-2 pr-1 py-2 hero'>
        <div className='panel is-primary hero-body px-0 py-0 hero'>
          <p className='panel-heading hero-head'>Components</p>
          <div className='hero-body px-0 py-0'>
            <p className='panel-block'></p>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='introduction'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Introduction
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='select'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Select
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='tree'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Tree
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='tree-select'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Tree Select
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='table'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Table
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='tag'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Tag
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='context-menu'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Context Menu
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='message-box'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Message Box
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='card'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Card
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='accordion'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Accordion
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='wizard'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Wizard
            </NavLink>
            <NavLink
              className={({isActive}) => 'panel-block' + (isActive ? ' is-active' : '')}
              to='date-picker'
            >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
              Date Picker
            </NavLink>
            <p className='panel-block'></p>
          </div>
        </div>
      </div>
      <div className='tile is-9 pl-1 pr-2 py-2 soupe-ui-layout-main-content hero'>
        <div className='panel hero-body px-2 py-2 hero'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Components
