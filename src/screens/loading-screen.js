import React, { Component } from 'react'
import { Container, Content, Text, H3, Spinner, Header } from 'native-base'
import { View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { AuthApi } from '../api/'
import { connect } from 'react-redux'
import { actions } from '../store/actions'

class LoadingScreen extends Component {

	constructor(props) {
		super(props);
		this.authApi = new AuthApi(
			'f6454304182a4a56b84f58c44e3f12b0',
			'b7669d4a1446427b9dc2e45a23351602'
		)
	}

	componentWillMount() {
		this.validateSession()
	}

	validateSession() {
		this.authApi.requestToken((response, error) => {
			if (! error) {
				this.props.authSuccess(response.data.access_token, response.data.token_type)
			} else {

			}
		})
	}

	render() {
		const styles = {
			contentStyle: {
				backgroundColor: '#0a4'
			},
			loadingContentStyle: {
				alignItems: 'center',
				justifyContent: 'center'
			},
			loadingTextStyle: {
				textAlign: 'center',
				color: '#fff'
			},
			spinnerStyle: {
				alignItems: 'center',
				width: 50,
				height: 50
			}
		}
		return (
			<Container>
				<Content style={styles.contentStyle} padder>
					<View style={styles.loadingContentStyle} >
						<H3 style={styles.loadingTextStyle}>Loading...</H3>
						<Spinner style={styles.spinnerStyle} color="#fff"/>
					</View>
				</Content>
			</Container>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
    authSuccess: (accessToken, tokenType) => { dispatch(actions.authSuccess(accessToken, tokenType)) }
})

export default connect(null, mapDispatchToProps)(LoadingScreen)