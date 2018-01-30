import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'

import MainScreen from './screens/main-screen'
import LoadingScreen from './screens/loading-screen'

import { actions } from './store/actions'

class App extends Component {

    state = {
        isLogged: true
    }

    renderScreen () {
        if (this.props.session) {
            return <MainScreen></MainScreen>
        }
        return <LoadingScreen></LoadingScreen>
    }

    render() {
        return (
            this.renderScreen()
        )
    }
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps, null)(App)