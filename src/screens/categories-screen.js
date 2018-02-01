import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
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

class CategoriesScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: 'Music categories',
		headerLeft: <Button transparent onPress={ () => navigation.navigate('DrawerOpen') }><Icon name='menu' /></Button>
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
	}

	openDrawer() {
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
		return (
			<Container>
				<Content>
					<List
						dataArray={ this.state.categories } 
						renderRow={ this.renderCategoryItem }>
            		</List>
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
	Home: { screen: connect(mapStateToProps, null)(CategoriesScreen) }
})
