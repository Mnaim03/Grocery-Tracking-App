import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c3f7c8', // verde chiaro
        borderRadius: 20,
        paddingVertical: 17,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        marginLeft: "auto",
        marginRight: "auto",
    },

    text: {
        color: '#007aff', // blu iOS
        fontWeight: '500',
        fontSize: 20,
    },

    separator: {
        height: 22,
        width: 1,
        backgroundColor: '#007aff',
        marginHorizontal: 10,
    },
});

function MenuBar({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Recent')}>
                <Text style={styles.text}>Recent</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
                <Text style={styles.text}>Lists</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Add-List</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MenuBar;