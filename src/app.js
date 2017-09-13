/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	View
} from 'react-native';


import ArtistList from './ArtistList';

import {getArtists} from './api-client';

class Music extends Component {

	state = {
		artists: []
	}
	componentDidMount(){
		getArtists()
		.then( 
			 artists => this.setState({ artists }) 
		)
	}

	render() {
		const artists = this.state.artists
		
		return (
			<View style={styles.container}>
				
				<ArtistList artists={artists} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray'
	}

});

AppRegistry.registerComponent('Music', () => Music);
