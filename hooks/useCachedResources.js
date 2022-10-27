import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useState,useEffect } from 'react';

export default async function useCachedResources() {
	// const [isLoadingComplete, setLoadingComplete] = useState(false);
	// isLoadingComplete = false;

	// Load any resources or data that we need prior to rendering the app
	// useEffect(() => {
	// function loadResourcesAndDataAsync() {
		try {
			SplashScreen.preventAutoHideAsync();

			// Load fonts
			await Font.loadAsync({
				...Ionicons.font,
				'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
			});
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			console.warn(e);
		} finally {
			// setLoadingComplete(true);
			console.log("Ready");
			// isLoadingComplete = true;
			SplashScreen.hideAsync();
			return true;
		}
	// }

    // loadResourcesAndDataAsync();

	// }, []);
	// console.log(isLoadingComplete);
	// return isLoadingComplete;
}
