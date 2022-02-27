import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            path="/home"
            component={Home}
          />
          {/* <Route
            path="/activity"
            component={null}
          />
          <Route
            path="/shop"
            component={null}
          />
          <Route
            path="/page"
            component={null}
          /> */}
          <Route
            path="/store"
            component={Store}
          />
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;