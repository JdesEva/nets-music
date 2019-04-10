import React from 'react'
import './index.css'

class Control extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className={`play-control ${this.props.index === this.props.idx ? 'is-show-play' : ''}`}>
                <a href="/#">&nbsp;</a>
                <a href="/#">&nbsp;</a>
                <a href="/#">&nbsp;</a>
            </div>
        )
    }
}

export default Control