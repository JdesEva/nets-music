import React from "react";
import "./index.css";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: [
        "http://p1.music.126.net/3UG3d6-nBuqv6Wx-USnyuw==/109951163935409399.jpg",
        "http://p1.music.126.net/lWJTUFnajqsOHR0pVKdvtg==/109951163934344738.jpg",
        "http://p1.music.126.net/mBcC5WL5NKudFdkk4Jr0iw==/109951163935418771.jpg",
        "http://p1.music.126.net/esVUFv1Nnybsq7GA_YoW2g==/109951163935416974.jpg",
        "http://p1.music.126.net/NAygpKKg9FGAbz5COTiOZw==/109951163935396299.jpg",
        "http://p1.music.126.net/velihUqMviN4-mYPc2ochA==/109951163935384461.jpg",
        "http://p1.music.126.net/lgssnTR2wiTrpvYeHjz0Dg==/109951163935389652.jpg",
        "http://p1.music.126.net/B_xdKU0T6kctXce9FeS3Cw==/109951163935385847.jpg",
        "http://p1.music.126.net/vaa1yQyQ8o_paoW-u7VcVA==/109951163935450240.jpg"
      ],
      imgIndex: 0,
      imgInterval: null
    };
  }

  componentDidMount() {
    this.setImg();
  }

  componentWillUnmount() {
    clearInterval(this.state.imgInterval);
  }

  setImg = () => {
    var fn = setInterval(() => {
      if (this.state.imgIndex === 8) {
        this.setState({
          imgIndex: 0
        });
      } else {
        var index = this.state.imgIndex;
        index ++
        this.setState({
          imgIndex: index
        });
      }
    }, 2000);
    this.setState({
      imgInterval: fn
    });
  };

  render() {
    return (
      <div className="discover">
        <div style={{ display: "none" }}>
          {this.state.imgURL.map((url, index) => {
            return <img key={index} alt={index} src={url} />;
          })}
        </div>
        <div className="discover-wrapper">
          <div className="img-wrapper">
            <img
              alt="pic"
              src={this.state.imgURL[this.state.imgIndex]}
              width="730"
              height="336"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
