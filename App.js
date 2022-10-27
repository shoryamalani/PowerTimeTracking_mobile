import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Appearance } from 'react-native';
import GlobalState from './components/GlobalState';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { peer2peerContext,themeContext,peer2peer } from './components/context';
import useCachedResources from './hooks/useCachedResources';
import renderIf from './components/renderIf';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { render } from 'react-dom';
export default class App extends React.Component {
	colorScheme = null;

	constructor(props){
		super(props);
		colorScheme = Appearance.getColorScheme();
		this.state = {
			isLoadingComplete: false,
		};
		useCachedResources().then((result) => {
			// this.state.isLoadingComplete = true;
			this.setState({isLoadingComplete: true});
			console.log("useCachedResources", result);
			console.log(this.state.isLoadingComplete)
		});
		// this.waitForPeerId();
		// val = setInterval(this.waitForPeerId, 1000)


		

	}
	waitForPeerId() {
		console.log( peer2peer ? peer2peer.id : "peer2peer.id not set");
		if (peer2peer) {
			if (peer2peer.id) {
				// this.state.peer2peer_id = peer2peer.id;
				clearInterval(val);
				
				return peer2peer.id;

			}
		}
		// if(this.state != undefined){
		// 	if(this.state.peer2peer == null ) {
				// console.log("waitForPeerId", peer2peer.id);
		// setTimeout(this.waitForPeerId, 100);

		// 	} else {
		// 		console.log(this.state.peer2peer.id)
		// 		// this.state.peer2peer_id = peer2peer.id;
		// 	}
		// } else {
		// 	setTimeout(this.waitForPeerId, 100);
		// }
	}
	render (){
			// while(!this.state.isLoadingComplete) {
			// 	setTimeout(() => {
			// 		console.log("isLoadingComplete", this.state.isLoadingComplete);
			// 	}, 100);
			// } 
			// if(!this.state.isLoadingComplete) {
			// 	return null;
			// } else {
				const renderPage = () => {
					console.log("renderPage", this.state.isLoadingComplete);
					// if(this.state.isLoadingComplete) {
				return ( 
					<SafeAreaProvider>
						<GlobalState>
						{/* <peer2peerContext.Provider value={this.state.peer2peer_id}> */}
							{/* <themeContext.Provider value={colorScheme}> */}
						{/* <Navigation colorScheme={this.colorScheme} /> */}
						<Navigation  />
						{/* </themeContext.Provider> */}
						{/* </peer2peerContext.Provider> */}
						<StatusBar style='auto' />
						</GlobalState>
					</SafeAreaProvider>
				);
				// }else {
				// 	return null;
				// }
			}
			// console.log("App render");
			console.log(this.state.isLoadingComplete);
			if (this.state.isLoadingComplete) {return renderPage();}
			else {return null;}
		}
			

}