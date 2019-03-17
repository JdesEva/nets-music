import React from "react";
import "./index.css";

class HeaderList extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: [
        "发现音乐",
        "我的音乐",
        "朋友",
        "商城",
        "音乐达人",
        "下载客户端"
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
      <ul className="m-nav">
        {this.state.navList.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                this.tick(index);
              }}
            >
              <span>
                <a
                  href="/#"
                  className={this.state.index === index ? "acive-a" : ""}
                >
                  <em>{name}</em>
                </a>
              </span>
            </li>
          );
        })}
        <li>
            <sup className="hot-dot"></sup>
        </li>
      </ul>
    );
  }
}

export default HeaderList;
