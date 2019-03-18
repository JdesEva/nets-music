import React from "react";
import "./index.css";

import { BrowserRouter as Router, Link } from 'react-router-dom'

class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: [{
        path: '/found',
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
      index: 0
    };
  }

  tick = index => {
    this.setState({
      index: index
    });
    console.log(this, index);
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

export default HeaderList;
