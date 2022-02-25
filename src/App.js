import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            path="/home"
            component={Home}
          />
          <Route
            path="/activity"
            component={Home}
          />
          <Route
            path="/shop"
            component={Home}
          />
          <Route
            path="/page"
            component={Home}
          />
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;