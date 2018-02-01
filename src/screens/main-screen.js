import React, { Component } from 'react';

import {
  DrawerNavigator,
  StackNavigator
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

import CategoriesScreen from './categories-screen'
import AlbumsScreen from './albums-screen'


// var connectionMainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen)
const MainNavigator = DrawerNavigator({
	Categories: { screen: CategoriesScreen },
	Albums: { screen: AlbumsScreen }
});

export default MainNavigator

