import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import SingleList from '../components/SingleList';
import { useState } from 'react';
export default function HomeScreen() {

    const deleteList = (listId) => {
        setLists(prevLists => prevLists.filter(list => list.id !== listId)); //Prendo la 
    };


    const [lists , setLists] = useState( [
        {
            id: 1,
            title: "Lista Spesa Settimanale",
            items: [
                {
                    name: "Latte",
                    price: 2,
                    quantity: 2,
                    category: 'Latticini'
                },
                {
                    name: "Pane",
                    price: 1.5,
                    quantity: 1,
                    category: 'Panetteria'
                }
            ]
        },
        {
            id: 2,
            title: "Lista Weekend",
            items: []
        }
    ])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Le Mie Liste della Spesa</Text>
                <Text style={styles.subtitle}>Organizza e gestisci le tue liste di spesa con facilità</Text>
            </View>

            <ScrollView style={styles.listContainer}>
                {lists.map(list => (
                    <SingleList key={list.id} list={list} onDelete={deleteList} />
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}> Aggiungi Lista</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F9', // colore di sfondo chiaro
    },
    header: {
        padding: 20,
        backgroundColor: '#2c7a7b', // colore di sfondo dell'header
        borderBottomWidth: 2,
        borderBottomColor: '#1d5a5a',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    addButton: {
        backgroundColor: '#2c7a7b', // colore pulsante aggiungi
        paddingVertical: 15,
        margin: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});