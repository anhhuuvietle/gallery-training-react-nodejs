import React from 'react';
import { Context } from './../context/context';

function withSpinner(Component) {
    return function ConnectedComponent(props) {
        return (
            <Context.Consumer>
                {action => <Component {...props} {...action} />}
            </Context.Consumer>
        );
    }
}
export default withSpinner;