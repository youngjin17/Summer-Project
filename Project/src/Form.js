import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Animated,
	TouchableOpacity,
	Text,
	Easing,
	Image
} from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import UserInput from './UserInput';
import Meteor, { Accounts } from 'react-native-meteor';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import spinner from '../images/ring.gif';

const MARGIN = 40;
Meteor.connect('ws://10.131.12.25:3000/websocket');

export default class Form extends Component {
	constructor() {
	    super();
			this.state = ({ email: '', password: '', isLoading:false, error: '' });

		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		this._onPress = this._onPress.bind(this);
	}


		isValid() {
			const { email, password } = this.state;
			let valid = false;

			if (email.length > 0 && password.length > 0) {
				valid = true;
			}

			if (email.length === 0) {
				this.setState({ error: 'You must enter an email address' });
			} else if (password.length === 0) {
				this.setState({ error: 'You must enter a password' });
			}

			return valid;
		}

		onSignIn() {
	    const { email, password } = this.state;

	    if (this.isValid()) {
	      Meteor.loginWithPassword(email, password, (error) => {
	        if (error) {
	          this.setState({ error: error.reason });
	        } else {
						Actions.app();
					}
	      });
	    }
	  }

	_onPress(event) {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });
		Animated.timing(
			this.buttonAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();

		setTimeout(() => {
			this._onGrow();
		}, 2000);

		setTimeout(() => {
			this.setState({ isLoading: false });
			this.buttonAnimated.setValue(0);
			this.growAnimated.setValue(0);
			this.setState({showProgress: true})
		}, 2300);
		this.onSignIn();
	}

		_onGrow() {
			Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 200,
				easing: Easing.linear
			}
		).start();
	}


	render() {
		const changeWidth = this.buttonAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
		});
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, MARGIN]
		});
		return (
			<View style={styles.container}>
			<Text>{this.state.error}</Text>
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='Email'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false}
					onChangeText={email => this.setState({ email })} />
				<UserInput source={passwordImg}
					secureTextEntry={true}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })} />
			</KeyboardAvoidingView>
			<View style={styles.containerButton}>
				<Animated.View style={{width: changeWidth}}>
					<TouchableOpacity style={styles.button}
						onPress={this._onPress}
						activeOpacity={1} >
							{this.state.isLoading ?
								<Image source={spinner} style={styles.image} />
								:
								<Text style={styles.text}>LOGIN</Text>
							}
					</TouchableOpacity>
					<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
				</Animated.View>
			</View>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	containerButton: {
		top: 0,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3DADFF',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#3DADFF',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
});
