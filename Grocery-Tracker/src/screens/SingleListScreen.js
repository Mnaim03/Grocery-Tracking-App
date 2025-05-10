import React from 'react';
import { Text, View , SafeAreaView, Button , FlatList } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 

function SingleListScreen({ navigation , route }) {
  //SCHERMATA DETTAGLIATA DELLA SINGOLA LISTA

    const list = route?.params?.list || []; // se li ricevi tramite navigazione

    const listItems = list.prodotti ;
    const data = list.data; 
    const name = list.name;

    const handleSelect = (item,val) => {
      item.selected = val ;
    }
    const filterSelected = () => items.filter(item => item.selected);
    return (
      <SafeAreaView>
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable onPress={()=> navigation.navigate("ShoppingListItem",{item})}>
            <ShoppingListItem 
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            category={item.category}
            selected={true}
            onSelected={(val) => handleSelect(item,val)}>
            </ShoppingListItem>
            </Pressable>
            )}>
              
            </FlatList>

        <Button title="Salva modifiche" onPress={() => {
          const selectedItems = filterSelected();

          navigation.navigate("ListsScreen") ; //da continuare , bisogna aggiornare la lista precedente.

          /* DA PROVARE
          navigation.navigate({
            name: "ListsScreen",
            params: { itemAggiornato : {selectedItems, name, data} },
            merge: true,
          });
          */
        }} />
        
        
        
          
        
      </SafeAreaView>
    );
  }
  
  export default SingleListScreen;