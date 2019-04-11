import React from 'react';
import './index.css'

import { connect } from 'react-redux'

import ACTIONTYPE from '../../../store/action.types'


class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlag: false
        }
    }


    componentDidMount() {
        console.log(this)
    }

    //切换播放器状态
    togglePlayer = (boolean) => {
        this.setState({
            showFlag: boolean
        })
        if (boolean) {

        }
    }

    render() {
        return (
            <div className="player">
                <div className="hover-player" onMouseEnter={this.togglePlayer.bind(this, true)}></div>
                <div onMouseLeave={this.togglePlayer.bind(this, false)} className={`all-player ${this.state.showFlag ? 'show-player' : 'hide-player'}`}>
                    <div className="player-content-right">
                        <div className="area1">
                            <a href="/#">&nbsp;</a>
                        </div>
                        <div className="area2"></div>
                    </div>
                    <div className="player-content">
                        <div className="player-control" style={{ marginLeft: '-455.5px' }}>
                            11118888
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lock: state.lock
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isLock: lock => {
            dispatch({type: ACTIONTYPE.updateLock,payload: lock})
        }
    }
}

Player = connect(mapStateToProps,mapDispatchToProps)(Player)

export default Player