import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


export default class AuthScreen extends Component<{}> {
	static navigationOptions = {
		title: 'Create an account'
	};

	checkSession() {
		
	}

	componentWillMount() {

	}

	render() {
		const styles = {
			splashScreenStyle: {
				backgroundColor: '#d20000',
				flex: 1,
				paddingTop: 20,
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
		return (
			<View>
				<Text>Auth Screen</Text>
			</View>
		);
	}
}