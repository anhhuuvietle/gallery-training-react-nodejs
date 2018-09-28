import React, { Component } from 'react';
import './LoginForm.css';
import Input from './../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    state = {
        user: {
            username: '',
            password: '',
        },
        err: [false, false],
        fail: false,
    }
    init() {
        this.setState({
            user: {
                username: '',
                password: '',
            },
            err: [false, false],
            fail: false,
        });
    }
    handleTypeInfo = field => e => {
        const value = e.target.value.trim();
        const user = { ...this.state.user };
        user[field] = value;
        this.setState({
            user,
            err: [false, false],
            fail: false
        });
    }
    handleLogin = () => {
        const { user } = this.state;
        if (user.username !== "") {
            if (user.password !== "") {
                axios.post('/api/authen/login', { user })
                .then(res => {
                    this.init();
                    localStorage.setItem('access-token-gallery', res.data.token);
                    this.props.history.push('/admin');
                })
                .catch((e) => {
                    console.log(e);
                    this.setState({ fail: true });
                })
            }
            else {
                this.setState({
                    err: [false, true]
                });
            }
        }
        else {
            this.setState({
                err: [true, false]
            });
        }
    }
    handleEnterLogin = e => {
        if (e.keyCode !== 13 && e.which !== 13) return;
        this.handleLogin();
    }
    render() {
        return (
            <div className="login-form">
                { this.state.fail && <p className="login-form__warning">Fail. Try again. Hehe</p> }
                <h2 className="login-form__title">HiHi. Login now!</h2>
                <Input
                    type="text"
                    placeholder="Username"
                    error={this.state.err[0]}
                    onChange={this.handleTypeInfo('username')}
                    value={this.state.user.username}
                    onKeyPress={this.handleEnterLogin}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    error={this.state.err[1]}
                    onChange={this.handleTypeInfo('password')}
                    value={this.state.user.password}
                    onKeyPress={this.handleEnterLogin}
                />
                <Button
                    className="login-button success"
                    onClick={this.handleLogin}
                > Log in</Button>
            </div>
        );
    }
}

export default withRouter(LoginForm);