/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';


import ArtistBox from './ArtistBox';


export default class Music extends Component {

	
	loginWithFacebook(){
		console.log("loginWithFacebook");		
	}

	render() {

		const artist = {
			image : 'https://previews.123rf.com/images/takra/takra1111/takra111100038/11276964-3d-neon-treble-clef-on-a-dark-background-Stock-Vector-music.jpg',
			name : 'Richi Lopez',
			likes : 200,
			comments :140
		}

		return (
			<View style={styles.container}>
			
				<ArtistBox 
					artist={artist}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
		paddingTop: 50
	}

});

AppRegistry.registerComponent('App', () => App);
