import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/BottomTabNavigator';


function App() {
  return (
    <View style={{flex:1}}>
          <AppNavigator/> {/*Bottom Tab Navigator che ha tutti i riferimenti agli screen, si deve sempre vedere , in ogni screen*/}
    </View>
  );
}

export default App;
