import React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import peer2peerContext from '../components/context';
import GlobalState from '../components/GlobalState';
import Context from '../components/context';
import Clipboard from '@react-native-clipboard/clipboard';
export default class TabOneScreen extends React.Component {
	constructor(props) {
		super(props);
		console.log('TabOneScreen props', props);
		console.log( this.context);
	}
	copyToClipboard = () => {
		console.log('Copied to clipboard: ' + this.context.Peer2PeerId);
		Clipboard.setString(this.context.Peer2PeerId);
		// Clipboard.setString('test');
	}
	static contextType = Context;
	render(){
		// let peerId = this.context;
		const copyButton = ()=> {if(this.context.Peer2PeerId != null){
			return(<Button onPress={this.copyToClipboard} title="Copy Code"></Button>)
		}
	}
		console.log('TabOneScreen peerId: ' + typeof(this.context.Peer2PeerId));
		return (
			// <Context.Consumer>
				// <Text>{this.context.Peer2PeerId ? this.context.Peer2PeerId != null : "Peer2PeerId" }</Text>
			// 	{(peer2peerInstance) => ( 
				<View style={styles.container}>
				<Text>{this.context.Peer2PeerId} {this.context.LastDataSent}</Text>
				{copyButton()}
				
				

				<Text style={styles.title}></Text>
				<View
					style={styles.separator}
					lightColor='#eee'
					darkColor='rgba(255,255,255,0.1)'
				/>
				<EditScreenInfo path='/screens/TabOneScreen.js' />
			</View>
			// )}
			// </Context.Consumer>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
