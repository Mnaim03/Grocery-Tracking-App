import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {GestureHandlerRootView} from "react-native-gesture-handler";



function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>

          <RootStackNavigator></RootStackNavigator>
  
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
