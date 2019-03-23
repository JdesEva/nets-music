import React from "react";
import "./index.css";

class Found extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      label: "音乐/视频/电台/用户"
    };
  }

  onPut = ev => {
    this.setState({
      value: ev.target.value
    });
  };

  label_Focus = ev => {
    this.setState({
      label: ""
    });
    this.input.focus();
  };

  label_Blur = ev => {
    if (this.state.value === "") {
      this.setState({
        label: "音乐/视频/电台/用户"
      });
    }
  };

  render() {
    return (
      <div className="m-headerInput">
        <span className="inner-text">
          <label onClick={this.label_Focus}>{this.state.label}</label>
          <input
            type="text"
            value={this.state.value}
            ref={input => (this.input = input)}
            onChange={this.onPut}
            onBlur={this.label_Blur}
          />
        </span>
      </div>
    );
  }
}

export default Found;
