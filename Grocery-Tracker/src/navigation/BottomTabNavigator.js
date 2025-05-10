import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ListsScreen from '../screens/ListsScreen';
import { Ionicons } from '@expo/vector-icons';


// Import your screens here
// Example:
// 
// ;
// import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    animation:'shift'
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="List" 
                    component={ListsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list-outline" size={size} color={color} />
                        ),
                    }}
                />
               
                
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;