import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuBar from './src/components/searchBar';
import AppNavigator from './src/navigation/AppNavigator';

import styles from './src/styles/main';
import {NavigationContainer} from "@react-navigation/native";

function App() {
  return (
      <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.subcontainer}>
          <AppNavigator/>
      </View>
        
      <View style={styles.submenu}>
        <MenuBar/>
      </View>
    </View>
      </NavigationContainer>
  );
}

export default App;
