import React from "react";
import "./index.css";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: [
        "http://p1.music.126.net/wQsqqUnoykzy-WTLnhvTDw==/109951163937786615.jpg",
        "http://p1.music.126.net/3UG3d6-nBuqv6Wx-USnyuw==/109951163935409399.jpg",
        "http://p1.music.126.net/BgpNkh351u-TmHuU44bnSw==/109951163936998232.jpg",
        "http://p1.music.126.net/Aczda9IuaZEjRWOyxvra4g==/109951163937002181.jpg",
        "http://p1.music.126.net/at3nstKnW80lWg9BxELBhg==/109951163937006567.jpg",
        "http://p1.music.126.net/Yh2tem4WWvWctTCvi4Tt9w==/109951163937005723.jpg",
        "http://p1.music.126.net/zLrt840c5nXP32VgjRodRw==/109951163937003461.jpg",
        "http://p1.music.126.net/yLOmQlOxT-twvrL5vSkCig==/109951163937365184.jpg",
        "http://p1.music.126.net/Wwkozl6e0vxvA59T99W0FQ==/109951163937363418.jpg"
      ],
      background: [
        'http://p1.music.126.net/jiaqZ-u0GvgZvqx1gpuffg==/109951163937789009.jpg',
        'http://p1.music.126.net/VJ3i3SgGgXsHodMum0eLxw==/109951163936991946.jpg',
        'http://p1.music.126.net/2kAY3rsKzUCAYN0SaHGBuQ==/109951163936998674.jpg',
        'http://p1.music.126.net/WPaLytug6g4KK16mxDcMrg==/109951163936996866.jpg',
        'http://p1.music.126.net/n8l_0H44hvnxBBwPQZbnZA==/109951163937004656.jpg',
        'http://p1.music.126.net/hw3etMj8c68u-b9rdA3cHQ==/109951163937007200.jpg',
        'http://p1.music.126.net/mDv_GjkHRsGYM_NRx1FZJg==/109951163937008233.jpg',
        'http://p1.music.126.net/t5fg1lFOLeh7EUY8Wrid4Q==/109951163937369527.jpg',
        'http://p1.music.126.net/oNVzfMkDFLoEw_aW7sudcw==/109951163937367766.jpg'
      ],
      imgIndex: 0,
      imgInterval: null,//计时器对象
      className: '',
      timeoutVal: null,//定时器对象
    };
  }

  componentDidMount() {
    this.clearImgInterval() //首先应该清除计时器,防止叠加
    this._initImgInterval();
  }

  componentWillUnmount() {
    this.clearImgInterval()
  }


  /**
   * 启动计时器
   */
  _initImgInterval = () => {
    var index = this.state.imgIndex
    var fn = setInterval(() => {
      if (index > 8) index = 0

      this.setState({
        imgIndex: index,
        className: 'img-leave'
      });

      index++

      var foo = setTimeout(() => {
        this.setState({
          className: 'img-enter'
        })
      }, 2200);

      this.setState({
        timeoutVal: foo
      });

    }, 3000);
    this.setState({
      imgInterval: fn
    });
  };

  /**
   * 清除计时器，定时器
   */
  clearImgInterval = () => {
    clearInterval(this.state.imgInterval);
    clearTimeout(this.state.timeoutVal)
    this.resetClass()
  }

  /**
   * 手动切换图片
   */
  tick = (index) => {
    this.setState({
      imgIndex: index
    })
    this.clearImgInterval()
  }

  /**
   * 向左向右
   */
  tickIndex = (status) => {
    var index = this.state.imgIndex
    if (status === -1) {
      index--
      if (index < 0) index = 8
    } else {
      index++
      if (index > 8) index = 0
    }

    this.setState({
      imgIndex: index
    })
  }

  /**
   * 设置class
   */

  resetClass = () => {
    this.setState({
      className: 'img-leave'
    })
  }


  render() {
    return (
      <div className="discover" onClick={this.resetClass} style={{ backgroundImage: `url(${this.state.background[this.state.imgIndex]})` }} onMouseEnter={this.clearImgInterval} onMouseLeave={this._initImgInterval} >
        {/* 图片预加载 */}
        <div style={{ display: "none" }}>
          {this.state.imgURL.map((url, index) => {
            return <img key={index} alt={index} src={url} />;
          })}
        </div>
        {
          this.state.background.map((url, index) => {
            return (
              <div className="img-prev" key={index} style={{ backgroundImage: `url(${url})` }}></div>
            )
          })
        }

        <div className="discover-wrapper">
          <div className="img-wrapper">
            <img
              alt="pic"
              src={this.state.imgURL[this.state.imgIndex]}
              width="730"
              height="336"
              className={this.state.className}
            />
            <div className="a-dot">
              {this.state.imgURL.map((row, index) => {
                return (
                  <a onClick={this.tick.bind(this, index)} className={`target-a ${this.state.imgIndex === index ? 'target-a-isactive' : 'target-a-default'}`} href="/#" key={index} target-index={row}>&nbsp;</a>
                )
              })}
            </div>
          </div>

          <span onClick={this.tickIndex.bind(this, -1)} className="arrow left-arrow">&nbsp;</span>
          <span onClick={this.tickIndex.bind(this, 1)} className="arrow right-arrow">&nbsp;</span>

          <div className="download-wrapper">
            <a href="/downlaod">下载客户端</a>
            <p className="downlaod-p">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Discover;
