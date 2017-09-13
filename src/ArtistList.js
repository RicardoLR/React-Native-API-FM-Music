/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    
	ListView,
	TouchableHighlight,
	RecyclerViewBackedScrollView
} from 'react-native';


import ArtistBox from './ArtistBox';


export default class ArtistList extends Component {

	
	constructor(props) {
        super(props);
		
		this.state = {
			artistDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		};
		
		/*  sustituido por updateDataSources:
		this.state = {
			dataSource: ds.cloneWithRows( props.artists )
		};
		*/
	}

	componentDidMount(){			
		this.updateDataSources(this.props.artists)

		console.warn("this.props.artists",this.props.artists);
	}

	/**
	 * se invoca antes de que un componente montado reciba nuevos objetos. 
	 * Si actualizar el estado en respuesta a cambios de prop (por ejemplo, para restablecerlo)
	 */
	componentWillReceiveProps( nextProps ){
		if( nextProps.artists !== this.props.artists ){
			this.updateDataSources(nextProps.artists)
		}
	}

	updateDataSources(newData){
		this.setState({ 
			artistDataSource: this.state.artistDataSource.cloneWithRows( newData ) 
		})
	}

	
	render() {

		return (
			<ListView style={styles.container}
				enableEmptySections={true}
				dataSource={this.state.artistDataSource}
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

