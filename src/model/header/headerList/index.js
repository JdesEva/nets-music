import React from "react";
import "./index.css";

import { HashRouter as Router, Link } from "react-router-dom";
import {connect} from 'react-redux'

class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: [{
        path: '/found/discover',
        name: "发现音乐"
      },
      {
        path: '/my',
        name: '我的音乐'
      }, {
        path: '/friend',
        name: '朋友'
      }, {
        path: '/mall',
        name: '商城'
      }, {
        path: '/musician',
        name: '音乐人'
      }, {
        path: '/download',
        name: '下载客户端'
      }
      ],
      index: 0,
      path: ''
    };
  }

  tick = index => {
    this.setState({
      index: index
    });
    console.log(this, index);
    this.props.onRouterPath(this.state.navList[index].path)
  };

  render() {
    return (
      <Router>
        <ul className="m-nav">
          {this.state.navList.map((row, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.tick(index);
                }}
              >
                <span>
                  <Link
                    to={row.path}
                    className={this.state.index === index ? "acive-a" : ""}
                  >
                    <em>{row.name}</em>
                    <sub style={{display: this.state.index === index ? 'block' : 'none'}} className="dott"></sub>
                  </Link>
                </span>
              </li>
            );
          })}
          <li>
            <sup className="hot-dot"></sup>
          </li>
        </ul>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.path
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouterPath: (path) => {
      dispatch({ type: 'ROUTER_ACTION', path: path })
    }
  }
}

HeaderList = connect(mapStateToProps, mapDispatchToProps)(HeaderList)


export default HeaderList;
