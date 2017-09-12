/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class ArtisBox extends Component {


	render() {

        const { image, name, likes, comments } = this.props.artist

        
		return (
			
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

		);
	}
}

const styles = StyleSheet.create({

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

