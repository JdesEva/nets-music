import React from 'react'
import './index.css'

class Zbbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="zb-box">
                <a href="/#">
                    <img alt={this.props.zb.name} src={this.props.zb.img} width="40" height="40"></img>
                </a>
                <div className="info">
                    <a href="/#" className="thide">{this.props.zb.name}</a>
                    <i className="zb-icon"></i>

                    <p className="thide">{this.props.zb.info}</p>
                </div>

            </div>
        )
    }
}

export default Zbbox