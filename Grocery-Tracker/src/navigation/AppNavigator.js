import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ListsScreen from "../screens/ListsScreen";
import RecentScreen from "../screens/RecentScreen";


const Stack = createNativeStackNavigator(); 


function AppNavigator() {
    return(
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: true }}
        >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Recent" component={RecentScreen} />
                <Stack.Screen name="Lists" component={ListsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
);
}


export default AppNavigator;