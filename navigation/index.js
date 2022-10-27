import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { peer2peerContext,themeContext,peer2peer } from '../components/context';
import NotFoundScreen from '../screens/NotFoundScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Text, View } from '../components/Themed';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default class Navigation extends React.Component {
	// console.log('Navigation peer2peer');
	colorScheme = null;
	constructor(props) {
		super(props);
		console.log('Navigation props', props.colorScheme);
		this.colorScheme = props.colorScheme;
	}
	static contextType = peer2peerContext;
	render() {
		// let context = this.context;
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			// theme={this.colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			{/* <Text>{this.context}</Text> */}
			<RootNavigator />
		</NavigationContainer>
	);
	}
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

class RootNavigator extends React.Component {
	colorScheme = null;
	constructor(props) {
		super(props);
		this.colorScheme = props.theme;
	}
	render() {
	return (
		<Stack.Navigator theme={this.colorScheme}  screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Root' component={BottomTabNavigator} />
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
		</Stack.Navigator>
	);
	}
}
