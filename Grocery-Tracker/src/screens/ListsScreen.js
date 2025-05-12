import React from 'react';
import { Text, View , SafeAreaView ,FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleListScreen from './SingleListScreen'
import ListStackNavigator from '../navigation/MainStackNavigator';
import ListItem from '../components/ListItem';
import { sampleLists } from './HomeScreen';
import listItemStyles from '../styles/ListItemStyle';

function ListsScreen() {
    return (
        <SafeAreaView style={listItemStyles.body}>
            <Text style={listItemStyles.title}>Lists</Text>

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