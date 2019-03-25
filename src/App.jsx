import React, { Component } from 'react';
import './App.css';

import routes from './router'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {
            routes.map((route, index) => {
              return (
                <Route exact={route.exact} path={route.path} key={index} component={route.component} children={() => {
                  return <Home route={route.children}></Home>
                }}></Route>
              )
            })
          }
        </Router>
      </div>
    );
  }
}

export default App;
