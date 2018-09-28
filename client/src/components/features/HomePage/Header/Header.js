import React, { Component } from 'react';
import './Header.css';
import Button from './../../../common/Button/Button';
import Modal from './../../../common/Modal/Modal';
import LoginForm from './LoginForm/LoginForm';

class Header extends Component {
    state = {
        open: false
    }
    handleToggleModal = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }
    render() {
        return (
            <div className="header">
                <Button className="success" onClick={this.handleToggleModal}> Log In</Button>
                <Modal
                    open={this.state.open}
                    handleClose={this.handleToggleModal}
                >
                    <LoginForm />
                </Modal>
            </div>
        );
    }
}

export default Header;