import React from 'react';
import { Text, View , SafeAreaView, Button , FlatList } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 

function SingleListScreen({ navigation , route }) {
  //SCHERMATA DETTAGLIATA DELLA SINGOLA LISTA

    const initialItems = route?.params?.items || []; // se li ricevi tramite navigazione
    const [items, setItems] = useState(initialItems);
  
  
    return (
      <SafeAreaView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable onPress={()=> navigation.navigate("ShoppingListItem")}>
            <ShoppingListItem 
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            category={item.category}>
            </ShoppingListItem>
            </Pressable>
            


              
            )}>
              
            </FlatList>
        
        
        
          
        
      </SafeAreaView>
    );
  }
  
  export default SingleListScreen;