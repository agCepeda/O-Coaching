import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import { View, Image } from 'react-native';
import {
	Container,
	Content,
	Text,
	H3,
	Spinner, 
	Header,
	List,
	ListItem,
	Thumbnail,
	Body,
	Button,
	Icon,
	Drawer
} from 'native-base'

import { connect } from 'react-redux'
import { actions } from '../store/actions'

import { Api } from '../api/'
import SideBar from '../views/side-bar'

class MainScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Music categories',
		headerLeft: <Button transparent onPress={ ()=> this.openDrawer() }><Icon name='menu' /></Button>
	})

	state = {
		categories: []
	}

	constructor(props) {
		super(props)
		this.api = new Api(
			this.props.session.accessToken,
			this.props.session.tokenType
		)

		console.log(this)
	}

	openDrawer() {
		console.log(this.drawer)
	}

	componentWillMount() {
		this.api.browseCategories(null, null, null, (responseData, error) => {
			if (! error) {
				console.log(responseData)
				this.setState({ categories: responseData.categories.items })
			}
		})
	}
	renderCategoryItem(category) {
		return (
			<ListItem>
          		<Thumbnail square source={ {uri: category.icons[0].url} } />
				<Body>
					<Text>{ category.name }</Text>
				</Body>
			</ListItem>
		)
	}

	render() {
		closeDrawer = () => {
			this.drawer._root.close()
		}

		openDrawer = () => {
			this.drawer._root.open()
		}

		return (
			<Drawer
				ref={(ref) => { this.drawer = ref; }}
				content={<SideBar navigator={this.navigator} />}
				onClose={() => closeDrawer()} >
				<Container>
					<Content>
						<List
							dataArray={ this.state.categories } 
							renderRow={ this.renderCategoryItem }>
	            		</List>
					</Content>
				</Container>
			</Drawer>

		)
	}
}
const mapStateToProps = function(state) {
	return {
		session: state.session
	}
}

// var connectionMainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen)
const MainNavigator = StackNavigator({
  Main: {screen: connect(mapStateToProps, null)(MainScreen) }
});

export default MainNavigator

