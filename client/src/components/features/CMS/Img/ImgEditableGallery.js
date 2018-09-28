import React from 'react';
import Button from '../../../common/Button/Button';
import './ImgEditableGallery.css';

const ImgEditableGallery = ({ url, ...props }) => {
    return (
        <div className="editable-gallery__img">
            <img src={url} alt="Please replace another one"/>
            <div className="background" style={{ background: `url(${url})`}}></div>
            <div className="editable-gallery__img-action">
                <Button className="info" onClick={props.edit}> Edit </Button>
                <Button className="warning" onClick={props.delete}> Delete </Button>
            </div>
        </div>
    );
};

export default ImgEditableGallery;