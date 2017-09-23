
import React, { Component } from 'react';
import {
	StyleSheet,
	ListView,
	 
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux'


import ArtistBox from './ArtistBox';


export default class ArtistList extends Component {

	
	constructor(props) {
        super(props);
		
		this.state = {
			artistDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		};
		
		/*  sustituido por _updateDataSources:
		this.state = {
			dataSource: ds.cloneWithRows( props.artists )
		};
		*/
	}

	componentDidMount(){			
		this._updateDataSources(this.props.artists)
	}

	/**
	 * se invoca antes de que un componente montado reciba nuevos objetos. 
	 * Si actualizar el estado en respuesta a cambios de prop (por ejemplo, para restablecerlo)
	 */
	componentWillReceiveProps( nextProps ){
		if( nextProps.artists !== this.props.artists ){
			this._updateDataSources(nextProps.artists)
		}
	}

	_updateDataSources(newData){
		this.setState({ 
			artistDataSource: this.state.artistDataSource.cloneWithRows( newData ) 
		})
	}

	_handlePressNextView(artist){
		Actions.artistDetail({ artist })		
	}

	render() {

		return (
			<ListView style={styles.container}
				enableEmptySections={true}
				dataSource={this.state.artistDataSource}
				renderRow={(artist) => { 
					return( 
						<TouchableOpacity onPress={ ()=> this._handlePressNextView(artist) } > 
							<ArtistBox artist={artist} />
						</TouchableOpacity>
					)
				} }
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

