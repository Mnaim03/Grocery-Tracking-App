import React from 'react';
import { Text, View, StyleSheet , SafeAreaView } from 'react-native';
import ShoppingListItem from '../components/shopping_list_item/ShoppingListItem';
import SingleList from '../components/SingleList';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Text>HOME HERE </Text>
            <SingleList list={
                {
                    id:1,
                    title:"Test List",
                    items:[
                        {
                         name:"Latte",
                         price:2,
                         quantity:2,
                         category:'Other'   
                        }
                    ]
                }
            }></SingleList>
        </SafeAreaView>
    );
}