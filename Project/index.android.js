import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginScreen from './src/LoginScreen';
import Profile from './profile/Profile';

export default class Project extends Component {
  render() {
		return <Router scenes={scenes} />
	}
}

const scenes = Actions.create(
	<Scene key="root">
		<Scene key="loginScreen"
			component={LoginScreen}
			animation='fade'
			hideNavBar={true}
			initial={true}
		/>
		<Scene key='app'
			component={Profile}
			animation='fade'
			hideNavBar={true}
		/>

	</Scene>
);


AppRegistry.registerComponent('Project', () => Project);
