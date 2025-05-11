import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable , SafeAreaView   } from 'react-native';
import { listItemStyles } from '../styles/ListItemStyle';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';

//Modelliamo list come un oggetto javascript definito in questo modo: 
/*

list:{
        id: id_lista
        title: titolo_lista
        items:[
                {
                    name:nome_prodotto1,
                    price:prezzo_prodotto1,
                    quantity:quantità,
                    category:categoria
                }

                {
                
                ITEM2

                } ...

        ]
}

*/
const ListItem = ({ list , onDelete  }) => {



    //Gestione dell'eliminazione di una lista: 
    const handleDelete = () =>{
        Alert.alert(`Are you sure you want to delete ${list.title}?`, "This operation is irreversible", [
            {
                text:'Cancel',
                onPress:()=>{return;}
            },
            {
                text:'OK',
                onPress:()=>{onDelete(list.id)} //onDelete , funzione passata dalla HomeScreen , in cui ho tutte le liste , quindi passo l'id della lista cliccata e la elimino nella HomeScreen
            }
        ])
    }


    //Al press sulla singola lista , devo poter vedere tutti gli "ShoppingListItem" della lista cliccata , o in una nuova schermata con un navigator o con popup
    const goToDetails = ()=>{

    }



    return (
        <TouchableOpacity 
            onPress={goToDetails}
            activeOpacity={0.7}
        >
            <View style={{
                backgroundColor: 'white',
                padding: 16,
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#ddd',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 16, fontWeight: '600', flex: 1 }}>
                    {list.title}
                </Text>

                <TouchableOpacity onPress={handleDelete}>
                    <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}



export default ListItem;