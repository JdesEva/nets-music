import React from "react";
import "./index.css";

class Albumbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"http://p3.music.126.net/1nJkc21Zqejot92ZfiW3mw==/109951163936577670.jpg?param=100y100",
      play:false
      
    };
  }

  /**
   * 显示播放按钮
   */
  toggleBtn = ()=>{
      this.setState({
          play: !this.state.play
      })
  }

  render() {
    return (
      <div className="album">
        <div onMouseEnter={this.toggleBtn} onMouseLeave={this.toggleBtn}>
          <img
            alt={this.state.url}
            src={this.state.url}
            width="100"
            height="100"
          />
          <a href="/#">&nbsp;</a>
          <span className={`play-album ${this.state.play ? 'play-album-show' : ''}`}>&nbsp;</span>
        </div>
        <div>
            <p className="info-album album-text">A Few Good Kids</p>
            <p className="album-singer album-text">马思唯</p>
        </div>
      </div>
    );
  }
}

export default Albumbox;
