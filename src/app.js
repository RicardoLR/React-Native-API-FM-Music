
import React, { Component } from 'react';

import {
	AppRegistry,
	StyleSheet,
	View
} from 'react-native';


import {
	Scene,
	Router
} from 'react-native-router-flux';
  
import LoginView from './LoginView'
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'


class Music extends Component {

	render() {
		return (
			<Router>        
				<Scene key="login" component={LoginView} hideNavBar />

				<Scene key="root" hideNavBar type="replace">
					<Scene key="home" component={HomeView} />
					<Scene key="artistDetail" component={ArtistDetailView} 
						title="Comentarios" hideNavBar={false} />
				</Scene>
			</Router>
		)
	}

}


AppRegistry.registerComponent('Music', () => Music);
