import React from "react";
import "./index.css";
import Navmenu from "./navmenu";
import Login from "./login";
import Found from "./found";
import Creator from "./creator";
import Routes from "./routes";
import Content from "./content";

import { connect } from "react-redux";
import { Route } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ""
    };
  }

  componentDidMount() {
    console.log(this.props)
    this._initPath()
  }

  /**
   * 保证进入首页时路由的正确
   */
  _initPath = ()=>{
    var origin = window.location.origin
    if(window.location.pathname === '/'){
      window.location.href = origin + this.props.path
    }
  }

  render() {
    return (
      <div className="m-top">
        <div className="header-wrapper">
          <h1 className="m-logo">
            <a href="/#" className="logo-a">
              网易云音乐
            </a>
          </h1>
          <Navmenu />
          <Login />
          <Creator />
          <Found />
        </div>
        <Routes />
        {this.props.route.map((row, index) => {
          return (
            <Route
              path={row.path}
              key={index}
              component={row.component}
              children={() => {
                if (row.children) return <Content route={row.children} />;
                return null
              }}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.path
  };
};

Home = connect(mapStateToProps)(Home);

export default Home;
