import React from "react";
import "./index.css";
import Navmenu from "./navmenu";
import Login from "./login";
import Found from "./found";
import Creator from "./creator";
import Routes from "./routes";
import Content from "./content";
import Footer from './footer'

import { connect } from "react-redux";
import { Route,Switch } from "react-router-dom";
import PropType from 'prop-types'

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
      window.location.href = origin + '/discover/found'
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
        <Switch>
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
        </Switch>
        <Footer></Footer>
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

Home.propType = {
  path: PropType.string.isRequired
}

export default Home;
