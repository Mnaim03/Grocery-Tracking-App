import React from "react";
import {View , SafeAreaView , Text , } from 'react-native'; 
import { FlatList } from "react-native-gesture-handler";
import ShoppingListItem from "../components/shopping_list_item/ShoppingListItem";

const ListDetailsScreen = ({route})=>{

    const items = route.params.items;

    return(
        <SafeAreaView>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <View style={{ padding: 10 }}>
                        <ShoppingListItem name={item.name} quantity={item.quantity} price={item.price} category={item.category}></ShoppingListItem>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            >
            </FlatList>
        </SafeAreaView>
    ); 
}


export default ListDetailsScreen; 
