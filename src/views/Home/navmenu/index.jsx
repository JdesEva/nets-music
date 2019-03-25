import React from "react";
import "./index.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          path: "/discover/found",
          name: "发现音乐"
        },
        {
          path: "/my",
          name: "我的音乐"
        },
        {
          path: "/friend",
          name: "朋友"
        },
        {
          path: "/mall",
          name: "商城"
        },
        {
          path: "/musician",
          name: "音乐人"
        },
        {
          path: "/download",
          name: "下载客户端"
        }
      ],
      index: 0,
      path: ""
    };
  }


  componentDidMount(){
    console.log(this.props,1234565)
  }

  tick = index => {
    this.setState({
      index: index
    });
  };


  render() {
    return (
      <ul className="m-nav">
        {this.state.navList.map((row, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.tick(index);
                this.props.onRouterPath(row.path)
              }}
            >
              <span>
                <Link
                  to={row.path}
                  className={this.state.index === index ? "acive-a" : ""}
                >
                  <em>{row.name}</em>
                  <sub
                    style={{
                      display: this.state.index === index ? "block" : "none"
                    }}
                    className="dott"
                  />
                </Link>
              </span>
            </li>
          );
        })}
        <li>
          <sup className="hot-dot" />
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.path
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRouterPath: path => {
      console.log(10023,path)
      dispatch({ type: "ROUTER_ACTION", path: path });
    }
  };
};

Navmenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navmenu);

export default Navmenu;
