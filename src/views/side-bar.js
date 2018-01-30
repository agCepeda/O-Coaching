import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Icon, Body, Text } from 'native-base'

const SideBar = () => {
	return (
		<Container style={ { backgroundColor: '#fff'} }>
			<Content>
				<List>
					<ListItem icon>
						<Left>
							<Icon name="search" />
						</Left>
						<Body>
							<Text>Search</Text>
						</Body>
					</ListItem>
				</List>
			</Content>
		</Container>
	)
}

export default SideBar