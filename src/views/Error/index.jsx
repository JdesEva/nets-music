import React from 'react'
import './index.css'

import { connect } from 'react-redux'

class ErrorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.onRouterPath('ErrorPage')
    }

    render() {
        return (
            <div className="not-found">
                我是错误页，出现则代表没有找到页面呀！！！
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        path: state.path
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRouterPath: path => {
            dispatch({ type: "ROUTER_ACTION", path: path });
        }
    };
};

ErrorPage = connect(mapStateToProps, mapDispatchToProps)(ErrorPage)


export default ErrorPage