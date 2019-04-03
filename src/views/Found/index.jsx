import React from 'react';

import Carousel from './carousel'
import Content from './content'
import Footer from './footer'

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
                <Footer></Footer>
            </div>
        )
    }
}


export default Found