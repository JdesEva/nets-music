import React from 'react';
import './index.css'

import {Link} from 'react-router-dom'
import { connect } from "react-redux";

class Vh2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return (
            <div className="v-h2">
                <Link to={this.props.route.path}>{this.props.route.name}</Link>
                
                <span className="more">
                    <Link to={this.props.route.path}>更多</Link>
                    <i className="logo cor"></i>
                </span>
            </div>
        )
    }
}


/**
 * 映射redux
 */
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
  
  Vh2 = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Vh2);


export default Vh2