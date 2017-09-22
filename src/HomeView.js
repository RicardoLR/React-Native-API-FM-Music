
import React, { Component } from 'react';

import {
	StyleSheet,
	View
} from 'react-native';

import {
	Scene,
	Router
} from 'react-native-router-flux';

import ArtistList from './ArtistList';

import {getArtists} from './api-client';


export default class HomeView extends Component {

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
