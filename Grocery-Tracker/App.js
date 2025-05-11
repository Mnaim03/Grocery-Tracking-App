import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/BottomTabNavigator';
import { db , createTables } from './src/data/db';
import ListStackNavigator from './src/navigation/MainStackNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
    <View style={{flex:1}}>
          
<MainStackNavigator></MainStackNavigator>
          
    </View>
    </NavigationContainer>
  );
}

export default App;
