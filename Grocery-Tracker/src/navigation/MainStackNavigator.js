
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListsScreen from "../screens/ListsScreen";
import ListItem from "../components/ListItem";
import SingleListScreen from "../screens/SingleListScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({lists , setLists , addList , deleteList , updateListItems}) => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}} >
       <Stack.Screen name="BottomBarNavigator">
  {() => (
    <BottomTabNavigator
      lists={lists}
      setLists={setLists}
      addList={addList}
      deleteList={deleteList}
      updateListItems={updateListItems}
    />
  )}
</Stack.Screen>
        <Stack.Screen name="SingleListScreen" component={SingleListScreen} />
      </Stack.Navigator>
    );
  };


  export default MainStackNavigator; 