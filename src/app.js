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
	Image,

	ListView,
	TouchableHighlight,
	RecyclerViewBackedScrollView
} from 'react-native';


import ArtistBox from './ArtistBox';


class Music extends Component {

	
	constructor(props) {
		super(props);

		const artist = {
			image : 'https://previews.123rf.com/images/takra/takra1111/takra111100038/11276964-3d-neon-treble-clef-on-a-dark-background-Stock-Vector-music.jpg',
			name : 'Richi Lopez',
			likes : 200,
			comments :140
		}
		const artists = Array(500).fill(artist);
		
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows( artists )
		};
	}

	render() {


		return (
			<ListView style={styles.container}
				dataSource={this.state.dataSource}
				renderRow={(artist) => <ArtistBox artist={artist} /> }
			/>

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
