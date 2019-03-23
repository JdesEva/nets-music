import React from 'react';

import Carousel from './carousel'
import Content from './content'

class Found extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return (
            <div>
                <Carousel></Carousel>
                <Content></Content>

            </div>
        )
    }
}


export default Found