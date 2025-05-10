import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

function MenuBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recent</Text>
            <View style={styles.separator} />
            <Text style={styles.text}>Lists</Text>
            <View style={styles.separator} />
            <Text style={styles.text}>Add-List</Text>
        </View>
    );
}

export default MenuBar;