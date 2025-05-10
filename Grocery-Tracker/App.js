import React from 'react';
import { Text, View } from 'react-native';

import MenuBar from './src/components/searchBar';
import styles from './styles/main';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
          <Text style={styles.title}>Grocery Tracker</Text>
          <Text>Get on track with your Grocery</Text>
      </View>

      <View style={styles.submenu}>
        <MenuBar/>
      </View>
    </View>
  );
}

export default App;