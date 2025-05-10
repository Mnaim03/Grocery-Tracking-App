import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MenuBar from './src/components/searchBar';
import AppNavigator from './src/navigation/AppNavigator';
import ShoppingListItem from './src/components/ShoppingListItem';

import styles from './styles/main';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
          <AppNavigator />
      </View>

      <View style={styles.submenu}>
        <MenuBar/>
      </View>
    </View>
  );
}

export default App;
