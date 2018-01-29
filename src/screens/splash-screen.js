import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native'

import {
  StackNavigator,
} from 'react-navigation'

import LoginView from '../views/login-view'
import AuthScreen from '../screens/auth-screen'
import MainScreen from '../screens/main-screen'

import { connect } from 'react-redux'
import { actions } from '../store/actions'

class SplashScreen extends Component {
	static navigationOptions = {
		title: 'Welcome',
	};

	checkSession() {
		
	}

	componentWillMount() {

	}

	showSignUpView() {
	}

	showRestorePasswordView() {
    	const { navigate } = this.props.navigation;

    	navigate('Auth', { view: 'RESTORE_PASSWORD_VIEW' });	
	}

	render() {
		const styles = {
			splashScreenStyle: {
				flex: 1,
				justifyContent: 'flex-start'
			},
			logoContainerStyle: {
				flex: 1,
				flexDirection: 'column',
		        justifyContent: 'center',
		        alignItems: 'center',
			},
			logoStyle: {
				width: 80, height: 80,
			}
		};

		const { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView style={ styles.splashScreenStyle }>
				<View style={ styles.logoContainerStyle }>
					<Image 
						style={ styles.logoStyle }
						source={ {uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'} } />
				</View>
				<LoginView
					onSignUpClick={ () => navigate('Auth', { view: 'SIGN_UP_VIEW' }) }
					onRestorePasswordClick={ () => navigate('Auth', { view: 'RESTORE_PASSWORD_VIEW' }) }
					onLoginClick={ () => navigate('Content') }>
				</LoginView>
			</KeyboardAvoidingView>
		);
	}
}
const AppNavigator = StackNavigator({
  Main: { screen: SplashScreen },
  Auth: { screen: AuthScreen },
  Content: { screen: MainScreen }
})

export default () => <AppNavigator />