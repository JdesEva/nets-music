import React from 'react'
import './index.css'
import store from '../../store/store.js'

import { HashRouter as Router, Link } from "react-router-dom";

class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            href: window.location.href.split('/#')[1],
            tagList: [{
                path: '/discover',
                name: '推荐'
            }, {
                path: '/toplist',
                name: '排行榜'
            }, {
                path: '/playlist',
                name: '歌单'
            }, {
                path: '/djradio',
                name: '主播电台'
            }, {
                path: '/singer',
                name: '歌手'
            }, {
                path: '/album',
                name: '新碟上架'
            }],
            tagIndex: 0,
        }
    }

    componentDidMount() {
        console.log(this.state)
        this.renderHref()
    }

    renderHref = () => {
        store.subscribe(() => {
            this.setState({
                href: store.getState().path
            })
            if(store.getState().path !== '/found'){
                this.setState({
                    tagIndex: 0
                })
            }
        })
    }

    setTagIndex = (index) => {
        this.setState({
            tagIndex: index
        })
    }

    render() {
        return (
            <Router>
                <div className={`wrapper-box ${(this.state.href.indexOf('/found') > -1 || this.state.href === '/') ? 'content-wrapper' : 'no-wrapper'}`}>
                    <div className="tag-wrapper" style={{ display: (this.state.href.indexOf('/found') > -1 || this.state.href === '/') ? 'block' : 'none' }}>
                        <ul>
                            {
                                this.state.tagList.map((row, index) => {
                                    return (
                                        <li key={index} onClick={this.setTagIndex.bind(this, index)}>
                                            <Link to={`/found${row.path}`}>
                                                <em className={this.state.tagIndex === index ? 'is-active' : ''}>{row.name}</em>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }

}

export default HeaderWrapper