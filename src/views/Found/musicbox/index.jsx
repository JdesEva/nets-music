import React from "react";
import "./index.css";

class Musicbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="musicbox">
        <div className="music-pic">
          <img
            alt="1"
            src="http://p1.music.126.net/ADGkaOacodi6cS65n8vNTg==/109951163943184850.jpg?param=140y140"
          />
          <a href="/#" className="bg-pic">
            &nbsp;
          </a>
          <div className="music-bottom" >
            <a href="/#" className="play">&nbsp;</a>
            <span className="play-icon"></span>
            <span className="play-count">{9999}</span>
          </div>
        </div>
        <div className="desc">
            <a href="/#">
            【VIP专享】一周新歌推荐
            </a>
        </div>
      </div>
    );
  }
}

export default Musicbox;
