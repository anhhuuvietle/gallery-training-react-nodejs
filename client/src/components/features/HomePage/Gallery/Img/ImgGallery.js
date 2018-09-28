import React, { Component } from 'react';
import './ImgGallery.css';

class ImgGallery extends Component {
    state = {
        style: {
            transformOrigin: '50% 50%'
        }
    }
    handleMouseMove = (e) => {
        const { nativeEvent } = e;
        const x = nativeEvent.offsetX / nativeEvent.target.width * 100;
        const y = nativeEvent.offsetY / nativeEvent.target.height * 100;
        let { style } = this.state;
        style = { 
            ...style, 
            transformOrigin: `${x}% ${y}%`,
        }
        this.setState({
            style
        });
    }
    handleMouseOut = () => {
        let { style } = this.state;
        style = { 
            ...style, 
            transformOrigin: '50% 50%',
            transform: 'scale(1)',
            transition: 'transform 0s ease-out'
        }
        this.setState({
            style
        });
        this.setState({
            style: {
                
            }
        });
    }
    handleMouseOver = () => {
        let { style } = this.state;
        style = { 
            ...style, 
            transform: 'scale(2)',
            transition: 'transform .5s ease-out'
        }
        this.setState({
            style
        });
    }
    render() {
        return (
            <div
                className="gallery__img"
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
                onMouseOver={this.handleMouseOver}
            >
                <img
                    src={this.props.img} 
                    alt="myimg"
                    style={this.state.style}
                />
            </div>
        );
    }
}

export default ImgGallery;