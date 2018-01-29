import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
	Form,
	Item,
	Input,
	Label,
	Button
} from 'native-base';


class LoginView extends React.Component {
	state = {
    username: '',
    password: '',
  }

  updateFormField = fieldName => text => {
    this.setState({ [fieldName]: text })
  }

  submitForm = () => {
    const { username, password } = this.state
    console.log(username, password)
    // now do something with email and password
  }

	render() {
		const styles = {
			containerStyle: {
				padding: 10,
			},
			inputUserStyle: {
				// marginBottom: 20
			},
			inputPasswordStyle: {
				// arginBottom: 20
			},
			loginButtonStyle: {
				alignSelf: 'center',
				paddingRight: 20,
				paddingLeft: 20
			},
			inputItemStyle: {
				marginBottom: 10
			},
			restorePasswordStyle: {
				alignSelf: 'center',
			}

		};

		return (
			<Form style={ styles.containerStyle }>
				<Item regular style={ styles.inputItemStyle }>
					<Input
						autoCapitalize='none'
						keyboardType='email-address'
						style={ styles.inputUserStyle } 
						placeholder='Username' 
						onChangeText={this.updateFormField('username')}
						value={ this.state.username } />
				</Item>
					
				<Item regular style={ styles.inputItemStyle }>
					<Input
						secureTextEntry
						style={ styles.inputPasswordStyle }
						placeholder='Password'
						onChangeText={this.updateFormField('password')}
						value={ this.state.password } />
				</Item>

	            <Button
	            	onPress={ this.submitForm }
	            	style={ styles.loginButtonStyle }
					onPress={() => this.props.onLoginClick()}>
	            	<Text>Log in</Text>
	            </Button>
				<Button
					style={ styles.restorePasswordStyle }
					small
					transparent
					warning
					onPress={() => this.props.onRestorePasswordClick()}>
					<Text>Forgot your password?</Text>
				</Button>

	            <Button
	            	full
	            	block
					onPress={() => this.props.onSignUpClick()}>
	              <Text>Sign up</Text>
	            </Button>
			</Form>
		)
	}
}


export default LoginView;