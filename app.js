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

import Icon from 'react-native-vector-icons/Ionicons';


export default class Music extends Component {

	
	loginWithFacebook(){
		console.log("loginWithFacebook");		
	}

	render() {
		const image = 'https://previews.123rf.com/images/takra/takra1111/takra111100038/11276964-3d-neon-treble-clef-on-a-dark-background-Stock-Vector-music.jpg'
		const name = 'Richi Lopez'
		const likes = 200
		const comments =140

		return (
			<View style={styles.container}>
			
				<View  style={styles.artistBox}>
					<Image style={styles.image} source={{ uri: image }} />
					
					<View style={styles.info}> 
						<Text style={styles.name}> {name} </Text>
						
						<View style={styles.row}> 
							
							<View style={styles.iconContainer}> 
								<Icon name="ios-heart-outline" size={30} color="gray" />
								<Text style={styles.count}> {likes} </Text>
							</View>
							<View style={styles.iconContainer}> 
								<Icon name="ios-chatboxes-outline" size={30} color="gray" />
								<Text style={styles.count}> {comments} </Text>
							</View>
						</View>
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
		paddingTop: 50
	},
	artistBox: {
		backgroundColor: 'white',	
		flexDirection: 'row'
	},
	info:{
		flex: 1, // Toma todo el espacio
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image:{
		width: 150, // no sigo pixeles
		height: 150
	},
	name:{
		fontSize: 20,
		marginTop: 10,
		color: '#333'
	},

	count:{
		color: 'gray'
	},

	row:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 30,
		marginTop: 15
	},
	iconContainer:{
		flex: 1,
		alignItems: 'center',
	}


});

AppRegistry.registerComponent('App', () => App);
