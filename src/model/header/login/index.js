import React from "react";
import "./index.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        loginList: ['手机号登录','微信登录','QQ登录','新浪微博登录','网易邮箱账号登录']
    };
  }

  render() {
    return (
      <div className="login-wrapper">
        <span>登录</span>
        <div className="login-box">
          <ul>
              {
                  this.state.loginList.map((item,index)=>{
                      return (<li key={index}>
                        <p>{item}</p>
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
