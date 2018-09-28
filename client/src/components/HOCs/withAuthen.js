import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const withAuthen = (WrappedComponent) => {
    const componemnt = class extends Component {
        state = {
            authenticated: false
        }
        componentDidMount() {
            axios({
                url: '/api/authen/authen',
                headers: {
                    token: localStorage.getItem('access-token-gallery')
                },
                method: 'post'
            })
            .then(() => {
                this.setState({ authenticated: true });
            })
            .catch(() => {
                this.props.history.push('/');
            });
        }
        render() {
            return (
                <React.Fragment>
                    { this.state.authenticated? <WrappedComponent { ...this.props } /> : null }
                </React.Fragment>
            );
        }
    }
    return withRouter(componemnt);
}
export default withAuthen;