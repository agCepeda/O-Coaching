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


class LoginView extends Component<*> {

	login() {

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
			}

		};
    const { navigation } = this.props;
    console.log(this, this.props);

		return (
			<Form style={ styles.containerStyle }>
				<Item regular style={ styles.inputItemStyle }>
					<Input style={ styles.inputUserStyle } placeholder='User' />
				</Item>
				<Item regular style={ styles.inputItemStyle }>
					<Input secureTextEntry style={ styles.inputPasswordStyle } placeholder='Password' />
				</Item>

	            <Button
	            	style={ styles.loginButtonStyle }>
	            	<Text>Log in</Text>
	            </Button>
				<Button
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