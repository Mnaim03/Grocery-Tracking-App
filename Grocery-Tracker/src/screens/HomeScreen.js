import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MenuBar from "../components/searchBar";

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>

            <View>
                <MenuBar navigation={navigation} />
            </View>
        </View>
    );
}