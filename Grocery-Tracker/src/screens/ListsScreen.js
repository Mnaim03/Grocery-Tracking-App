import React from 'react';
import { Text, View , SafeAreaView ,FlatList} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleListScreen from './SingleListScreen'

const Stack = createNativeStackNavigator();

const ListStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Lists" component={ListsScreen} />
        <Stack.Screen name="ListItem" component={ListItem} />
        <Stack.Screen name="ShoppingListItem" component={ShoppingListItem} />
        <Stack.Screen name="SingleListScreen" component={SingleListScreen} />
      </Stack.Navigator>
    );
  };

function ListsScreen({navigation,route}) {
    
  const lists = route?.params?.lists || [];

  /* const itemAggiornato = route?.params?.itemAggiornato || []; */
    return ( 
        <SafeAreaView>
            <FlatList
          data={lists}
          keyExtractor={(item) => list.id}
          renderItem={({ item }) => (
            <Pressable onPress={()=>{
                navigation.navigate("SingleListScreen", { list: item })
            }}>

            <ListItem name={item.name} data={item.data} />
            </Pressable>
            
          )}
        />
        </SafeAreaView>
    );
}

export default ListsScreen;