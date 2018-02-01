import React, { Component } from 'react'

import {
	Container,
	Content,
	Text,
	H3,
	Spinner,
	List,
	ListItem,
	Thumbnail,
	Body,
	Button,
	Icon,
	Drawer,
	Header,
	Item,
	Input
} from 'native-base'

import { StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { actions } from '../store/actions'

import { Api } from '../api/'

class AlbumsScreen extends Component {
	
	static navigationOptions = ({ navigation }) => ({
		title: 'Search Albums',
		headerLeft: <Button transparent onPress={ () => navigation.navigate('DrawerOpen') }><Icon name='menu' /></Button>,
		headerBottom: <Header searchBar rounded>
						<Item>
							<Icon name="ios-search" />
							<Input placeholder="Search" />
							<Icon name="ios-people" />
						</Item>
					</Header>
	})

	openDrawer() {
	}

	render() {
		return (
			<Container>
				<Content>
					
					<Text>Album Screen</Text>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		session: state.session
	}
}

export default StackNavigator({
	Home: { screen: connect(mapStateToProps, null)(AlbumsScreen) }
})
