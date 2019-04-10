import React from 'react'
import './index.css'

import Control from '../control'

class SingWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            controlStatus: false,
            index: -1,
            count: new Array(10).fill(0)
        }
    }

    //切换按钮显隐藏
    toggleHover = (index) => {
        this.setState({
            index: index
        })
    }


    //隐藏按钮
    hideHover = () => {
        this.setState({
            index: -1
        })
    }

    render() {
        return (
            <div className="sing-wrapper-list">
                <div className="top-list">
                    <div>
                        <img src={this.props.img.url} alt={this.props.img.url} width="80" height="80" />
                        <a href="/#" className="top-a">&nbsp;</a>
                    </div>
                    <div className="title">
                        <h3 className="thide">{this.props.img.title}</h3>
                        <div className="t-btn">
                            <a href="/#">&nbsp;</a>
                            <a href="/#">&nbsp;</a>
                        </div>
                    </div>
                </div>
                <div className="sing-content">
                    <ul onMouseLeave={this.hideHover}>
                        {
                            this.state.count.map((row, index) => {
                                return (
                                    <li key={index} onMouseEnter={this.toggleHover.bind(this, index)}>
                                        <span className={index < 3 ? 'is-top' : ''}>{index + 1}</span>
                                        <a href="/#" className="thide" data-v={row}>ooo</a>
                                        <Control index={index} idx={this.state.index}></Control>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="look-all">
                        查看全部>
                    </div>
                </div>
            </div>
        )
    }
}


export default SingWrapper