import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { H1 } from 'native-base'

class AlbumDetailScreen extends Component {
	
	static navigationOptions = ({navigation}) => ({
	    title: navigation.state.params.album.title,
	});

	render() {
		const { album } = this.props.navigation.state.params

		const styles = {
			containerStyle: {
				flex: 1,
				flexDirection: 'column'
			},
			imgContainerStyle: {
				height: 300
			},
			imgStyle: { flex: 1, width: null,  }
		}

		return (
			<View style={ styles.containerStyle }>
				<View style={ styles.imgContainerStyle }>
					<Image style={ styles.imgStyle } resizeMode='cover' source={ {uri: album.image } } />
				</View>
				<H1>{ album.title }</H1>
			</View>
		)
	}
	
}

export default AlbumDetailScreen