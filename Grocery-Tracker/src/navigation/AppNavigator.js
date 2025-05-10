import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ListsScreen from "../screens/ListsScreen";
import RecentScreen from "../screens/RecentScreen";


const Stack = createNativeStackNavigator(); 


const AppNavigator = () =>{
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Recent" component={RecentScreen} />
            <Stack.Screen name="Lists" component={ListsScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}


export default AppNavigator; 