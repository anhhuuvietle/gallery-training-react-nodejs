import React, { Component } from 'react';
import Header from './Header/Header';
import Description from './Description/Description';
import Gallery from './Gallery/Gallery';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Description />
                <Gallery />
            </div>
        );
    }
}

export default Home;