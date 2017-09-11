import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView
} from 'react-native';
import ProfileInfo from './ProfileInfo';

export default class Profile extends Component {
	render() {
		return (
			<View style={styles.top}>
				<ScrollView>
					<ProfileInfo />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  	top: {
		flex: 1
  	}
});
