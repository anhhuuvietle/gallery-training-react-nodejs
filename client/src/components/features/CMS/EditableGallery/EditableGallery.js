import React, { Component } from 'react';
import './EditableGallery.css';
import ImgEditableGallery from '../Img/ImgEditableGallery';
import axios from '../AxiosInstance/axios';
import Modal from '../../../common/Modal/Modal';
import Input from './../../../common/Input/Input';
import Button from './../../../common/Button/Button';
import withSpinner from './../../../HOCs/withSpinner';

class EditableGallery extends Component {
    state = {
        imgs: [],
        showModal: false,
        img: null
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
    handleToggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
        }));
    }
    handleDelete = (id) => e => {
        this.props.showSpinner();
        axios.delete(`/api/images/delete/${id}`)
            .then(() => {
                let { imgs } = this.state;
                imgs = imgs.filter(img => img._id !== id);
                this.setState({
                    imgs
                });
                this.props.hideSpinner();
            })
            .catch(e => {
                this.props.hideSpinner();
                console.log(e);
            });
    }
    handleEdit = id => e => {
        const { imgs } = this.state;
        const img = imgs.find(i => i._id === id);
        if (img) {
            this.setState({
                img: { ...img },
                showModal: true
            });
        }
    }
    handleUpdatingImg = e => {
        const img = { ...this.state.img };
        img.link = e.target.value;
        this.setState({ img });
    }
    handleUpdate = () => {
        this.props.showSpinner();
        const { img } = this.state;
        axios.put('/api/images/update', img)
            .then(() => {
                const imgs = [...this.state.imgs];
                const id = imgs.findIndex(i => i._id === img._id);
                imgs[id] = img;
                this.setState({
                    imgs,
                    img: null,
                    showModal: false
                });
                this.props.hideSpinner();
            })
            .catch(e => this.props.hideSpinner());
    }
    handleStopEdit = () => {
        this.setState({ img: null });
    }
    render() {
        const imgs = this.state.imgs.map((img) => (
            <ImgEditableGallery
                key={img._id}
                url={img.link}
                delete={this.handleDelete(img._id)}
                edit={this.handleEdit(img._id)}
            />
        ));

        return (
            <React.Fragment>
                <div className='editable-gallery'>
                    {imgs}
                </div>
                <Modal
                    open={this.state.showModal}
                    handleClose={this.handleToggleModal}
                    onClose={this.handleStopEdit}
                >
                    <div className="adding-image-modal">
                        {
                            this.state.img &&
                            <React.Fragment>
                                <img src={this.state.img.link} alt="Choose another one" />
                                <Input
                                    onChange={this.handleUpdatingImg}
                                    value={this.state.img.link}
                                />
                            </React.Fragment>

                        }
                        <Button className="success" onClick={this.handleUpdate}> Save </Button>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withSpinner(EditableGallery);