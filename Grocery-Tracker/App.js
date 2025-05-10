import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import ShoppingListItem from './src/components/ShoppingListItem';


const App = () => {
  return (
    <SafeAreaView>
      <ShoppingListItem name='latte' quantity={2} price={2} category='Beverages'></ShoppingListItem>
    </SafeAreaView>
  ); 
}


export default App; 
