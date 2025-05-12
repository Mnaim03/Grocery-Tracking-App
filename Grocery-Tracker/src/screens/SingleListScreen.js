import React , {useState} from 'react';
import {Text, View, SafeAreaView, Button, FlatList, TextInput, TouchableOpacity, Modal} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 import ListItemStyles from '../styles/ListItemStyle';

function SingleListScreen({ navigation,route }) {
  const items = route.params?.items || []; // fallback a array vuoto se non esiste
  const length = items.length;

  const PopUp = () => {
      return (
          <Modal
          visible={visible}
          transparent={true}
          onRequestClose={()=> setVisible(false)}
          animationType="slide">

          <TouchableOpacity
              style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
              activeOpacity={1}
              onPressOut={() => setVisible(false)} // chiude se clicchi fuori
          >

              <View style={ListItemStyles.popUp}>
                  <View style={ListItemStyles.topModal}>
                      <Text style={ListItemStyles.TopModalTitle}>New Product</Text>
                  </View>

                    <View style={{marginTop: 30}}/>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Name"}></TextInput>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Quantity"}></TextInput>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Price"}></TextInput>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Category"}></TextInput>

                  <Text style={ListItemStyles.addProdBtn} onPress={()=>navigation.goBack()}>Add Product</Text>
              </View>
          </TouchableOpacity>

      </Modal>
      );
  }

  const [visible, setVisible] = useState(false);

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
        <PopUp/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={ListItemStyles.zeroProd}>
               <Text style={ListItemStyles.zeroProdTitle}>Add Product</Text>
               <Text style={ListItemStyles.zeroProdSub}>Add the first Product to the list by clicking the button below.</Text>

              <TouchableOpacity onPress={()=> setVisible(true)}>
                  <View style={ListItemStyles.addFromZero}>
                      <Text style={ListItemStyles.plusText}>+</Text>
                  </View>
              </TouchableOpacity>
          </View>


        <Text style={ListItemStyles.goBack} onPress={()=>navigation.goBack()}>Go Back</Text>
      </View>
    </SafeAreaView>
  );
}


export default SingleListScreen;