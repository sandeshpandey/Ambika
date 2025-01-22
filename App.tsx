// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/Home/HomeScreen';
import "react-native-gesture-handler"
import GameScreen from './src/views/Game/GameScreen';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Game: GameScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
      <Navigation />
  );
};