import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Provider } from 'react-redux'

import SplashScreen from './screens/splash-screen'
import MainScreen from './screens/main-screen'

//import store from './store/'


export default class App extends Component {

  state = {
      isLogged: true
  }

  renderScreen () {
    if (this.state.isLogged) {
        return <MainScreen></MainScreen>
    }
    return <SplashScreen></SplashScreen>
  }

  render() {
    return (
        <SplashScreen></SplashScreen>
    );
  }
}
/*
const mapStateToProps = (state) => ({
    notifications: state.settings.notifications
})

 Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
*/