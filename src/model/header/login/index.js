import React from "react";
import "./index.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        loginList: [{
          class:'tel-icon',
          name:'手机号登录'
        },{
          class:'weixin-icon',
          name:'微信登录'
        },{
          class:'qq-icon',
          name:'QQ登录'
        },{
          class:'sina-icon',
          name:'新浪微博登录'
        },{
          class:'nets-email-icon',
          name: '网易邮箱账号登录'
        }],
        boxStatus: 'none'
    };
  }

  showBox = (ev)=>{
    this.setState({
      boxStatus: 'block'
    })
  }

  hideBox = (ev)=>{
    this.setState({
      boxStatus: 'none'
    })
  }

  render() {
    return (
      <div onMouseEnter={this.showBox} onMouseLeave={this.hideBox} className="login-wrapper">
        <span>登录</span>
        <div className="login-box" style={{display:this.state.boxStatus}}>
          <i className="box-angle"></i>
          <ul>
              {
                  this.state.loginList.map((item,index)=>{
                      return (<li key={index}>
                        <i className={`icon ${item.class}`}></i>
                        <p>{item.name}</p>
                      </li>)
                  })
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
