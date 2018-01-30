import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';

import store from './store/'
import App from './app';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}