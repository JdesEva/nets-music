import React from "react";
import "./index.css";


class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div></div>
    );
  }
}



export default Discover;
