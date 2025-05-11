import React from 'react';
import { Text, View , SafeAreaView, Button , FlatList } from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 

function SingleListScreen({ navigation,route }) {
  const items = route.params?.items || []; // fallback a array vuoto se non esiste
  const length = items.length;

  if (length !== 0) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <ShoppingListItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                category={item.category}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
         <Button title="OK" onPress={()=>navigation.goBack()}></Button>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: '#666' }}>
          Non ci sono ancora elementi in questa lista
        </Text>
        <Button title="OK" onPress={()=>navigation.goBack()}></Button>
      </View>
    </SafeAreaView>
  );
}


export default SingleListScreen;