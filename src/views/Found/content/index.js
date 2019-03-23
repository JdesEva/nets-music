import React from "react";
import "./index.css";

import Vh2 from "../vh2";
import Musicbox from "../musicbox";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: {
        path: "/discover/playlist",
        name: "热门推荐"
      }
    };
  }

  render() {
    return (
      <div className="content">
        <div className="content-wrapper">
        <div className="sing-warpper">
          <Vh2 route={this.state.route} />
          <div className="box-wrapper">
            <Musicbox />
            <Musicbox />
            <Musicbox />
            <Musicbox />
            <Musicbox />
            <Musicbox />
          </div>
        </div>
        <div className="login-content">
            113423
        </div>
        </div>
      </div>
    );
  }
}

export default Content;
