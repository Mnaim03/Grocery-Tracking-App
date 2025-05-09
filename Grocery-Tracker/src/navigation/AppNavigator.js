import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator(); 


const AppNavigator = () =>{
    <NavigationContainer>
            <Stack.Navigator initialRouteName="">
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
                <Stack.Screen></Stack.Screen>
            </Stack.Navigator>

    </NavigationContainer>
}


export default AppNavigator; 