import React from 'react'
import './index.css'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import FoundMusic from '../foundMusic'
import My from '../my'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this)
    }

    render() {
        return (
            <Router>  
                <div>
                    <Route exact path="/" component={FoundMusic}></Route>
                    <Route path="/found" component={FoundMusic}></Route>
                    <Route path="/my" component={My}></Route>
                </div>
            </Router>
        )
    }
}

export default Main