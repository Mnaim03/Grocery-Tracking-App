import React from 'react';
import { Text, View, StyleSheet , SafeAreaView } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import ListItem from '../components/ListItem';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


export default function HomeScreen() {
    

    //Liste di esempio , quando faremo il db le prenderemo da li 
    const sampleLists = [
        {
            id:1,
            title:'Prima lista',
            items:[]
        },

        {
              id:2,
            title:'Seconda Lista', 
            items:[]
        }
    
    ]
    
    const [lists , setLists] = useState(sampleLists); 

    const deleteList = (listId)=>{
        setLists(prevLists => prevLists.filter(list => list.id !== listId)); //Funzione di eliminazione passata ad ogni singola lista "ListItem"
        /* Aggiornare la logica per il db quando lo introdurremo con sqlite*/
    }

    

    return (
        <GestureHandlerRootView>
        <SafeAreaView>
            <Text>HOME HERE </Text>
            <FlatList
            data={lists}
            renderItem={({item})=>{
               return  <ListItem list={item} onDelete={deleteList}></ListItem>
            }}
            >

            </FlatList>
            
        </SafeAreaView>
</GestureHandlerRootView>
        
    )}
