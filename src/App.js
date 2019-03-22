import React, { Component } from 'react';
import './App.css';

import routes from './router'

import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {
            routes.map((route, index) => {
              console.log(route)
              return (
                <Route exact={route.exact} path={route.path} key={index} component={route.component} render={
                  props=>{
                    
                  }
                }></Route>
              )
            })
          }
        </Router>
      </div>
    );
  }
}

export default App;
