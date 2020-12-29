import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Carousel from './Carousel/Carousel';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Cards/>
            </div>
        );
    }
}


export default Home;