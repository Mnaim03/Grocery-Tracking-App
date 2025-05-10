import React from "react";
import BottomTabNavigator from './BottomTabNavigator'; 
import ListDetailsScreen from '../screens/ListDetailsScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 
const RootStackNavigator = () =>{
return(
    
        <Stack.Navigator>
            <Stack.Screen 
        name="Home" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }} 
      />
        <Stack.Screen name="Details" component={ListDetailsScreen}></Stack.Screen>
        </Stack.Navigator>
        
)
}

export default RootStackNavigator; 