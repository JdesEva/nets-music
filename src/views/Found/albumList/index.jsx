import React from 'react'
import './index.css'

class AlbumList extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return (
            <div className="album-box">
                <div className="album-inner">
                    <span className="turn-left arrow-i">&nbsp;</span>
                    <div className="roll-pull">
                    
                    </div>
                    <span className="turn-right arrow-i">&nbsp;</span>
                </div>
            </div>
        )
    }
}

export default AlbumList