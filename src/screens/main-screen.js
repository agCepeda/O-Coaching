import React, { Component } from 'react';

import {
	Container,
	Content,
	Header,
	Left,
	Right,
	Body,
	Title,
	Text,
	Button,
	Spinner,
	List,
	ListItem,
	Icon
} from 'native-base';

import { View, Image } from 'react-native';
import { connect } from 'react-redux'
import { actions } from '../store/actions'

export default class MainScreen extends Component {

	state = { albums:[] };

	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData);
			this.setState({ albums: responseData }) 
		});
	}

	showAlbumDetailView(album) {
		const { navigation } = this.props;

		navigation.navigate('Detail', { album })
	}

	render() {
		const styles = {
			containerStyle: {
				flex: 1
			},
			headerStyle: {
				flexDirection: 'row',
				flex: 1,
				justifyContent: 'flex-start',
				flex: 1
			},
			artistStyle: {
				fontSize: 12,
				textAlign: 'left',
				flex: 1
			},
			albumStyle: {
				fontSize: 18,
				textAlign: 'left',
				flex: 1
			},
			titleContainerStyle: {
		        flexDirection: 'column',
		        justifyContent: 'flex-end',
		        alignItems: 'flex-end',
			},
			artistImageStyle: {
				width: 40, height: 40,
				borderRadius: 20
			},
		}
		return (
			<View style={ styles.containerStyle }>
				<List
					dataArray={this.state.albums}
					renderRow={(item) =>
					<ListItem
						onPress={() => {
							this.showAlbumDetailView(item)
						}}>
						<View style={ styles.headerStyle }>
							<Image style={ styles.artistImageStyle } source={ { uri: item.thumbnail_image } } />
							<View style={ styles.titleContainerStyle }>
								<Text style={ styles.albumStyle }>{ item.title }</Text>
								<Text style={ styles.artistStyle }>{ item.artist }</Text>
							</View>
						</View>
					</ListItem>}>
				</List>
			</View>
		)
	}
}
/*
const mapStateToProps = (state) => ({
  session: state.session,
  user: state.user
})
*/

// export default connect(mapStateToProps)(MainScreen)