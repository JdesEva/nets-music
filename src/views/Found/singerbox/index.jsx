import React from 'react'
import './index.css'

class Singerbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="singerbox">
                <a href="/#" className="singerbox-link">
                    <div className="header">
                        <img alt={this.props.singer.name} src={this.props.singer.img} width="62" height="62"></img>
                    </div>
                    <div className="info">
                        <h4>
                            <span className="thide">{this.props.singer.name}</span>
                        </h4>
                        <p className="thide">{this.props.singer.info}</p>
                    </div>
                </a>
            </div>
        )
    }
}


export default Singerbox