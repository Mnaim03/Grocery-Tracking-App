import React from 'react';
import { Text, View , SafeAreaView ,FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleListScreen from './SingleListScreen'
import ListStackNavigator from '../navigation/MainStackNavigator';
import ListItem from '../components/ListItem';
import { sampleLists } from './HomeScreen';


function ListsScreen() {
    return ( 
        <SafeAreaView>
            <FlatList
          data={sampleLists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem list={item} />
          )}
        />
        </SafeAreaView>
    );
}

export default ListsScreen;