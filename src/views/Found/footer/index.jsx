import React from 'react';
import './index.css'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="copy">
                        <ul>
                            <li>关于网易</li>
                            <li>|</li>
                            <li>客服服务</li>
                            <li>|</li>
                            <li>服务条款</li>
                            <li>|</li>
                            <li>网站导航</li>
                            <li>|</li>
                            <li>意见反馈</li>
                        </ul>
                        <div className="info-p">
                            <p>网易公司版权所有©1997-2019</p>
                            <p>杭州乐读科技有限公司运营：</p>
                            <p>浙网文[2018]3506-263号</p>
                        </div>
                        <div className="jb-police">
                            <span>违法和不良信息举报电话：0571-89853516</span>
                            <span>举报邮箱：</span>
                            <span>ncm5990@163.com</span>
                        </div>
                    </div>
                    <div className="footer-share">
                        <ul>
                            <li>
                                <div></div>
                                <p>用户认证</p>
                            </li>
                            <li>
                                <div></div>
                                <p>独立音乐人</p>
                            </li>
                            <li>
                                <div></div>
                                <p>赞赏</p>
                            </li>
                            <li>
                                <div></div>
                                <p>视频奖励</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer