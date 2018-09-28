import React, { Component } from 'react';
import './Admin.css';
import withAuthen from './../../HOCs/withAuthen';
import EditableGallery from './EditableGallery/EditableGallery';
import Button from './../../common/Button/Button';
import Modal from './../../common/Modal/Modal';
import Input from './../../common/Input/Input';
import axios from './AxiosInstance/axios';
import withSpinner from './../../HOCs/withSpinner';

class Admin extends Component {
    state = {
        link: '',
        showAddingModal: false
    }
    handleGoHome = () => {
        this.props.history.push('/');
    }
    handleToggleAddingModal = () => {
        this.setState(prevState => ({
            showAddingModal: !prevState.showAddingModal,
        }));
    }
    handleTypeLinkImage = (e) => {
        this.setState({
            link: e.target.value
        });
    }
    handleAddImage = () => {
        this.props.showSpinner();
        const { link } = this.state;
        axios.post('/api/images/add', {
            link
        })
            .then(() => {
                window.location.reload();
                this.props.hideSpinner();
            })
            .catch((e) => this.props.hideSpinner());

    }
    render() {
        return (
            <div>
                <div className="description">
                    <h2>Hi Viet Anh, what do you want to edit today?</h2>
                </div>
                <div className="admin__action">
                    <Button className="success" onClick={this.handleToggleAddingModal}> Add New Image </Button>
                    <Button className="success" onClick={this.handleGoHome}> Home Page</Button>
                </div>
                <EditableGallery />
                <Modal
                    open={this.state.showAddingModal}
                    handleClose={this.handleToggleAddingModal}
                >
                    <div className="adding-image-modal">
                        <img src={this.state.link} alt="Choose another one" />
                        <Input
                            onChange={this.handleTypeLinkImage}
                            value={this.state.link}
                            placeholder="Paste the image's link"
                        />
                        <Button className="success" onClick={this.handleAddImage}> Add</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withAuthen(withSpinner(Admin));