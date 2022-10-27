import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({peer2peer}) {
	const colorScheme = useColorScheme();
	console.log('BottomTabNavigator peer2peer', peer2peer);

	return (
		<BottomTab.Navigator
			initialRouteName='TabOne'
			screenOptions={{"tabBarActiveTintColor": "#000","tabBarStyle": [{"display": "flex"},null]}}
		>
			<BottomTab.Screen
				name='TabOne'
				component={TabOneNavigator }
				data={peer2peer= peer2peer}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-code' color={color} />
					)
				}}
				
				
			/>
			<BottomTab.Screen
				name='TabTwo'
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='ios-code' color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator({peer2peer}) {
	console.log('TabOneNavigator peer2peer', peer2peer);
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name='TabOneScreen'
				component={TabOneScreen}
				options={{ headerTitle: 'Tab One Title' , peer2peer: peer2peer}}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name='TabTwoScreen'
				component={TabTwoScreen}
				options={{ headerTitle: 'Tab Two Title' }}
			/>
		</TabTwoStack.Navigator>
	);
}
