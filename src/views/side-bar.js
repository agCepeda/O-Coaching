import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Icon, Body, Text } from 'native-base'

const SideBar = () => {
	return (
		<Container style={ { backgroundColor: '#fff'} }>
			<Content>
				<List>
					<ListItem icon>
						<Left>
							<Icon name="artist" />
						</Left>
						<Body>
							<Text>Artist</Text>
						</Body>
					</ListItem>
					<ListItem icon>
						<Left>
							<Icon name="album" />
						</Left>
						<Body>
							<Text>Album</Text>
						</Body>
					</ListItem>
					<ListItem icon>
						<Left>
							<Icon name="music" />
						</Left>
						<Body>
							<Text>Track</Text>
						</Body>
					</ListItem>
				</List>
			</Content>
		</Container>
	)
}

export default SideBar