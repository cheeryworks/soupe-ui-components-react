import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import Introduction from "./components/Introduction";
import SelectDemo from "./components/SelectDemo";
import TreeDemo from "./components/TreeDemo";
import TreeSelectDemo from "./components/TreeSelectDemo";
import TableDemo from "./components/TableDemo";

function Components() {
  let match = useRouteMatch();

  return (
    <Router>
      <div className="tile hero-body px-0 py-0 soupe-ui-layout-sidebar">
        <div className="tile is-vertical is-3 px-2 py-2 hero">
          <div className="panel is-primary hero-body px-0 py-0 hero">
            <p className="panel-heading hero-head">Components</p>
            <div className="hero-body px-0 py-0">
              <p className="panel-block"></p>
              <NavLink
                className="panel-block"
                to={`${match.url}`}
                exact
                activeClassName="is-active"
              >
                <span className="panel-icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                Introduction
              </NavLink>
              <NavLink
                className={`panel-block`}
                to={`${match.url}/select`}
                activeClassName="is-active"
              >
                <span className="panel-icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                Select
              </NavLink>
              <NavLink
                className={`panel-block`}
                to={`${match.url}/tree`}
                activeClassName="is-active"
              >
                <span className="panel-icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                Tree
              </NavLink>
              <NavLink
                className={`panel-block`}
                to={`${match.url}/tree-select`}
                activeClassName="is-active"
              >
                <span className="panel-icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                TreeSelect
              </NavLink>
              <NavLink
                className={`panel-block`}
                to={`${match.url}/table`}
                activeClassName="is-active"
              >
                <span className="panel-icon">
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </span>
                Table
              </NavLink>
              <p className="panel-block"></p>
            </div>
          </div>
        </div>
        <div className="tile is-9 px-2 py-2 soupe-ui-layout-main-content hero">
          <div className="panel hero-body px-2 py-2">
            <Switch>
              <Route path={`${match.path}/select`}>
                <SelectDemo />
              </Route>
              <Route path={`${match.path}/tree`}>
                <TreeDemo />
              </Route>
              <Route path={`${match.path}/tree-select`}>
                <TreeSelectDemo />
              </Route>
              <Route path={`${match.path}/table`}>
                <TableDemo />
              </Route>
              <Route path={match.path}>
                <Introduction />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Components;
