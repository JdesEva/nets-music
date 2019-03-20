import React from "react";
import "./index.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'

import Discover from "../discover";
import My from "../my";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ''
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      //路由列表
      <Router>
        <div>
          <Route exact path="/" component={Discover} />
          <Route path="/found/discover" component={Discover} />
          <Route path="/my" component={My} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.path
  }
}

Main = connect(mapStateToProps)(Main)

export default Main;
