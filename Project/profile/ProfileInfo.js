import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';
import Wallpaper from '../src/Wallpaper';

export default class ProfileInfo extends Component {
  	constructor(props) {
  	    super(props);
  		this.state = ({
        	TextNumber: '21',
			Name: 'Youngjin Kim'
		});
	}
	render() {
		return (
      			<Wallpaper gray={true}>
			    	<Text style={styles.text}>{this.state.Name}</Text>
          			<View style={styles.info}>
	            		<Text style={styles.text2}>{this.state.TextNumber}</Text>
			            <Text style={styles.text2}>Messages</Text>
			       	</View>
      			</Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
	info: {
	    justifyContent: 'space-around',
	    alignItems: 'center'
	},
	info2: {
	    flexDirection: 'row',
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    bottom: 5
  	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
		marginTop: 20,
		fontSize: 18,
		letterSpacing: 2,
    alignSelf: 'center'
	},
  	text2: {
      	color: 'white',
  		backgroundColor: 'transparent',
  		marginTop: 20,
  		fontSize: 18,
  		letterSpacing: 2,
      	alignSelf: 'center'
	},

});
