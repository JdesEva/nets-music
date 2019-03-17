import React from "react";
import "./index.css";
import HeaderList from "../headerList";
import HeaderControl from "../headerControl";
import Creator from '../creator'
import Login from '../login'

class HeaderBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header-wrapper">
        <h1 className="m-logo">
          <a href="/#" className="logo-a">
            网易云音乐
          </a>
        </h1>
        <HeaderList />
        <Login></Login>
        <Creator></Creator>
        <HeaderControl />
      </div>
    );
  }
}

export default HeaderBar;
