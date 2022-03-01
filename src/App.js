import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Store from './pages/Store';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={Home}
          />
          <Route
            path="/arcade"
            component={Store}
          />
          <Route
            path="/shop"
            component={null}
          />
          <Route
            path="/whitepaper"
            component={null}
          />
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;