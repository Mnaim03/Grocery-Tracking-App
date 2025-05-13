import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import AppNavigator from './src/navigation/BottomTabNavigator';
import { createTableItems, createTableLists, createTableCategories, insertCategory } from './src/data/db';
import ListStackNavigator from './src/navigation/MainStackNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { insertItem } from './src/data/db';
import { sampleLists } from './src/screens/HomeScreen';
import { useState } from 'react';
function App() {
  const [lists , setLists] = useState(sampleLists); 
  const deleteList = (listId) => {
    setLists(prevLists => prevLists.filter(list => list.id !== listId));
  };
  const addList = (newList) => {
    setLists(prevLists => [...prevLists, newList]);
  };
  const updateListItems = (listId, newItems) => {
    setLists(prevLists => 
      prevLists.map(list => 
        list.id === listId 
          ? {...list, items: newItems}
          : list
      )
    );
  };

  useEffect(() => {
    const initDB = async () => {
      try {
        await createTableItems();
        await createTableLists();
        await createTableCategories();
        await insertCategory();
        console.log('Tabelle create (o già esistenti)');
      } catch (error) {
        console.error('Errore durante l\'inizializzazione del DB:', error);
      }
    };
  
    initDB(); 
  }, []);

  return (
    <NavigationContainer>
    <View style={{flex:1}}>
          
<MainStackNavigator
  lists={lists}
  setLists={setLists}
  addList={addList}
  deleteList={deleteList}
  updateListItems={updateListItems}
></MainStackNavigator>
          
    </View>
    </NavigationContainer>
  );
}

export default App;
