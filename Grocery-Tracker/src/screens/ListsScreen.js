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
    
  const lists = route?.params?.items || [];
    return (
        <SafeAreaView>
            <FlatList
          data={lists}
          keyExtractor={(item) => list.id}
          renderItem={({ item }) => (
            <Pressable onPress={()=>{
              navigation.navigate("SingleListScreen")
              {/*Si dovrebbero passare tutti gli oggetti della lista. */}
            }}>

            <ListItem name={item.name} data={item.data} />
            </Pressable>
            
          )}
        />
        </SafeAreaView>
    );
}

export default ListsScreen;