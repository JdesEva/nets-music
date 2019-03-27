import React from 'react'
import './index.css'

class Vh3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <div className="n-vh3">
                <span>{this.props.title.title}</span>
                <a style={{display: this.props.title.more ? 'block' : 'none'}} className="n-vh3-more" href="/#">查看全部 ></a>
            </div>
        )
    }
}

export default Vh3