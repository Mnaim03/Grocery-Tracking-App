import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuBar from './src/components/searchBar';
import AppNavigator from './src/navigation/AppNavigator';

import {NavigationContainer} from "@react-navigation/native";

function App() {
  return (
    <View style={{flex:1}}>
          <AppNavigator/>
    </View>
  );
}

export default App;
