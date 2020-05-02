import './App.scss';
import React, { Component } from 'react';
import Routes from './Routes/Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApplicationContext from './Contexts/ApplicationContext';

export default class App extends Component {
  render() {
    return (
      <ApplicationContext>
        <Router>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </ApplicationContext>
    );
  }
}