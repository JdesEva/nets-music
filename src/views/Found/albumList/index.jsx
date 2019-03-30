import React from "react";
import "./index.css";

import Albumbox from "../albumbox";

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: new Array(15).fill(0)
    };
  }

  componentDidMount(){
      console.log(this)
  }

  render() {
    return (
      <div className="album-box">
        <div className="album-inner">
          <span className="turn-left arrow-i">&nbsp;</span>
          <div className="roll-pull">
            <ul className="roll-list">
              {this.state.count.map((item, index) => {
                return (
                  <li key={index}>
                    <Albumbox index={item} />
                  </li>
                );
              })}
            </ul>
          </div>
          <span className="turn-right arrow-i">&nbsp;</span>
        </div>
      </div>
    );
  }
}

export default AlbumList;
