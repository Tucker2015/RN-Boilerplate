import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import Navigator from './src/components/AppNavigation'
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import { Text } from "react-native";

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return <NavigationContainer><Navigator></Navigator></NavigationContainer>;
}