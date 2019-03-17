import React from "react";
import "./index.css";

import HeaderBar from "./headerBar";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="m-top">
        <HeaderBar />
      </div>
    );
  }
}

export default Header;
