import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>My <Text style={styles.text2}>App</Text></Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 26,
		letterSpacing: 2
	},
		text2: {
		color: 'white',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 26,
		letterSpacing: 2
	}
});
