import React from "react";
import "./index.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'

import FoundMusic from "../foundMusic";
import My from "../my";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ''
    };
  }

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      //路由列表
      <Router>
        <div>
          <Route exact path="/" component={FoundMusic} />
          <Route path="/found/discover" component={FoundMusic} />
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
