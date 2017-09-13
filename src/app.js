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



	constructor() {
		super();
		
		this.state = {
			artists: []
		}
	}

	componentDidMount() {
		console.warn("componentDidMount")	

		getArtists().then( artists => {
			this.setState({ artists })
		})
	}

	render(){
		console.warn("this.state.artists", this.state.artists)	
		const artists = this.state.artists
		/*
		const artists = [{
			id: '534535-45434-435',
			image : 'https://previews.123rf.com/images/takra/takra1111/takra111100038/11276964-3d-neon-treble-clef-on-a-dark-background-Stock-Vector-music.jpg',
			name : 'Richi Lopez',
			likes : 200,
			comments :140
		},
		{
			id: '45434-435',
			image : 'https://previews.123rf.com/images/takra/takra1111/takra111100038/11276964-3d-neon-treble-clef-on-a-dark-background-Stock-Vector-music.jpg',
			name : 'Richi',
			likes : 20,
			comments :10
		}]
		*/
		
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
