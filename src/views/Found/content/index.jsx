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
          <div className="grap"></div>
          <Vh2 route={this.state.route} />
        </div>
        <div className="login-content">
           <div className="login-form-control">
              <p className="login-note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
              <a href="/#" className="btn-default">用户登录</a>
           </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Content;
