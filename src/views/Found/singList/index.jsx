import React from 'react'
import './index.css'

import SingWrapper from '../singWrapper'

class SingList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="sing-list">
                <SingWrapper img={{ url: 'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100', title: '云音乐飙升榜' }}></SingWrapper>
                <SingWrapper img={{ url: 'http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100', title: '云音乐新歌榜' }}></SingWrapper>
                <SingWrapper img={{ url: 'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100', title: '网易原创歌曲榜' }}></SingWrapper>
            </div>
        )
    }
}

export default SingList