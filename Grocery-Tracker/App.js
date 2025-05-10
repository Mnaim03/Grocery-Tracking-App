import React from 'react';
import { Text, View } from 'react-native';

import MenuBar from './src/components/searchBar';
import AppNavigator from './src/navigation/AppNavigator';

import styles from './styles/main';

//<Text style={styles.title}>Grocery Tracker</Text>
//<Text>Get on track with your Grocery</

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