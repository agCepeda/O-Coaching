import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native'

import { connect } from 'react-redux'
import { actions } from '../store/actions'


export default class MainScreen extends Component {
	render() {
		return (
			<View>
				<List
					dataArray={this.state.albums}
					renderRow={(item) =>
					<ListItem 
						onPress={() => { 
							Actions.RepoInfo();
							this.props.repoSelected(item)
						}}>
						<Text>{item.full_name}</Text>
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