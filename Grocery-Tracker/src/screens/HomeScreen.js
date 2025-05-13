import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Modal, TextInput, TouchableOpacity } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
import ListItem from '../components/ListItem';
import { FlatList } from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { createList , getLists } from '../data/db';

//Liste di esempio , quando faremo il db le prenderemo da li 
   export const sampleLists = [
        {
            id:1,
            title:'Prima lista',
            items:[
               
            ]
        },

        {
              id:2,
            title:'Seconda Lista', 
            items:[
                {
                    name:'Verdura',
                    price:2, 
                    quantity:2,
                    category:'Vegetables'
                    
                }
            ]
        },
       {
           id:3,
           title:'Prima lista',
           items:[

           ]
       },
    
    ]

export default function HomeScreen({lists , setLists , addList , deleteList , updateListItems}) {
    
    
    
    const [isModalVisible, setModalVisible] = useState(false);
    const [newListTitle, setNewListTitle] = useState('');


    const createNewList = () => {
        if (newListTitle.trim()) {
            const newList = {
                id: Date.now(),
                title: newListTitle.trim(),
                items: [],
            };
            setLists([...lists, newList]); //Aggiorna le liste con la nuova appena creata
            setNewListTitle('');
            createList(newListTitle);
            setModalVisible(false);
        }

    };

    return (
        <GestureHandlerRootView>
        <SafeAreaView>
            <Text>HOME HERE </Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={() => setModalVisible(true)}>
                    + Crea Nuova Lista
                </Text>
            </View>
            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Inserisci il titolo della nuova lista</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Titolo della lista"
                            value={newListTitle}
                            onChangeText={setNewListTitle}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => createNewList(newListTitle)}
                            >
                                <Text style={styles.modalButtonText}>Crea</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                                onPress={() => {
                                    setModalVisible(false);
                                    setNewListTitle('');
                                }}
                            >
                                <Text style={styles.modalButtonText}>Annulla</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <FlatList
            data={lists}
            renderItem={({item})=>{
               return  <ListItem list={item} onDelete={()=>deleteList(item.id)}></ListItem>
            }}
            >

            </FlatList>
            
        </SafeAreaView>
</GestureHandlerRootView>
        
    )}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})