import React, { Component } from 'react';
import ImgGallery from './Img/ImgGallery';
import './Gallery.css';
import axios from 'axios';
import withSpinner from './../../../HOCs/withSpinner';


class Gallery extends Component {
    state = {
        imgs: [],
    }
    componentDidMount() {
        this.props.showSpinner();
        axios.get('/api/images/get')
            .then(res => {
                this.setState({
                    imgs: res.data
                });
                this.props.hideSpinner();
            })
            .catch(e => {
                console.log(e);
                this.props.hideSpinner();
            });
    }
    render() {
        console.log(this.props);
        const imgs = this.state.imgs.map((img) => (
            <ImgGallery key={img._id} img={img.link} />
        ));
        return (
            <div className='gallery'>
                {imgs}
            </div>
        );
    }
}

export default withSpinner(Gallery);