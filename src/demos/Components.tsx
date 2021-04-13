import React from 'react'
import { HashRouter, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import Introduction from './components/Introduction'
import SelectDemo from './components/select/SelectDemo'
import TreeDemo from './components/tree/TreeDemo'
import TreeSelectDemo from './components/tree-select/TreeSelectDemo'
import TableDemo from './components/table/TableDemo'
import TagDemo from './components/tag/TagDemo'
import ContextMenuDemo from './components/context-menu/ContextMenuDemo'
import MessageBoxDemo from './components/message-box/MessageBoxDemo'
import CardDemo from './components/card/CardDemo'
import AccordionDemo from './components/accordion/AccordionDemo'
import WizardDemo from './components/wizard/WizardDemo'
import DatePickerDemo from './components/date-picker/DatePickerDemo'
import './Components.scss'

function Components() {
  let match = useRouteMatch()

  return (
    <HashRouter>
      <div className='tile hero-body px-0 py-0 soupe-ui-layout-sidebar'>
        <div className='tile is-vertical is-3 pl-2 pr-1 py-2 hero'>
          <div className='panel is-primary hero-body px-0 py-0 hero'>
            <p className='panel-heading hero-head'>Components</p>
            <div className='hero-body px-0 py-0'>
              <p className='panel-block'></p>
              <NavLink
                className='panel-block'
                to={ `${ match.url }` }
                exact
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Introduction
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/select` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Select
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/tree` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Tree
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/tree-select` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Tree Select
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/table` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Table
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/tag` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Tag
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/context-menu` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Context Menu
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/message-box` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Message Box
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/card` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Card
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/accordion` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Accordion
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/wizard` }
                activeClassName='is-active'
              >
                <span className='panel-icon'>
                  <i className='fas fa-angle-right' aria-hidden='true'></i>
                </span>
                Wizard
              </NavLink>
              <NavLink
                className={ `panel-block` }
                to={ `${ match.url }/date-picker` }
                activeClassName='is-active'
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
          <div className='panel hero-body px-2 py-2'>
            <Switch>
              <Route path={ `${ match.path }/select` }>
                <SelectDemo/>
              </Route>
              <Route path={ `${ match.path }/tree` }>
                <TreeDemo/>
              </Route>
              <Route path={ `${ match.path }/tree-select` }>
                <TreeSelectDemo/>
              </Route>
              <Route path={ `${ match.path }/table` }>
                <TableDemo/>
              </Route>
              <Route path={ `${ match.path }/tag` }>
                <TagDemo/>
              </Route>
              <Route path={ `${ match.path }/context-menu` }>
                <ContextMenuDemo/>
              </Route>
              <Route path={ `${ match.path }/message-box` }>
                <MessageBoxDemo/>
              </Route>
              <Route path={ `${ match.path }/card` }>
                <CardDemo/>
              </Route>
              <Route path={ `${ match.path }/accordion` }>
                <AccordionDemo/>
              </Route>
              <Route path={ `${ match.path }/wizard` }>
                <WizardDemo/>
              </Route>
              <Route path={ `${ match.path }/date-picker` }>
                <DatePickerDemo/>
              </Route>
              <Route path={ match.path }>
                <Introduction/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default Components
