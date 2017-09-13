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
        
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows( props.artists )
		};
	}

	/**
	 * se invoca antes de que un componente montado reciba nuevos objetos. 
	 * Si actualizar el estado en respuesta a cambios de prop (por ejemplo, para restablecerlo)
	 */
	componentWillReceiveProps( nextProps ){
		if( nextProps.artists !== this.props.artists ){
			this.setState({ 
				dataSource: this.state.dataSource.cloneWithRows( nextProps ) 
			})
		}
	}

	render() {


		return (
			<ListView style={styles.container}
				enableEmptySections={true}
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

