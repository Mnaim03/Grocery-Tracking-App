import React , {useState} from 'react';
import {Text, View, SafeAreaView, Button, FlatList, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 import ListItemStyles from '../styles/ListItemStyle';
 import {sampleLists} from "./HomeScreen";
 import { Picker } from '@react-native-picker/picker';

function SingleListScreen({ navigation,route }) {
  const items = route.params?.items || []; // fallback a array vuoto se non esiste
  const length = items.length;
  const id = route.params?.id;

  const PopUp = () => {
      const [name,setName] = React.useState('');
      const [quantity,setQuantity] = React.useState();
      const [price,setPrice] = React.useState('');
      const [category,setCategory] = React.useState('');

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
                  <TextInput style={ListItemStyles.textInput} placeholder={"Name"} onChangeText={(val)=>{setName(val)}}></TextInput>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Quantity"} onChangeText={(val)=>{setQuantity(val)}} keyboardType="numeric"></TextInput>
                  <TextInput style={ListItemStyles.textInput} placeholder={"Price"} onChangeText={(val)=>{setPrice(val)}} keyboardType="numeric"></TextInput>
                  <Picker
                    selectedValue={category}
                    onValueChange={(val) => setCategory(val)}
                    style={ListItemStyles.pickerInput}
                  >
                    <Picker.Item label="Select a category..." value="" />
                    <Picker.Item label="Fruits" value="fruits" />
                    <Picker.Item label="Vegetables" value="vegetables" />
                    <Picker.Item label="Meat" value="meat" />
                    <Picker.Item label="Fish" value="fish" />
                    <Picker.Item label="Bakery" value="bakery" />
                    <Picker.Item label="Snacks" value="snacks" />
                    <Picker.Item label="Beverages" value="beverages" />
                    <Picker.Item label="Frozen" value="frozen" />
                  </Picker>

                  <Text style={ListItemStyles.addProdBtn} onPress={()=>{
                    if (name?.trim() !== "" && price?.trim() !== "" && !isNaN(price) && quantity?.trim() !== "" && !isNaN(quantity) && category?.trim() !== "") {
                    items.push({name:name,price:price,quantity:quantity,category:category})
                    setVisible(false);
                    return; 
                    }
                    Alert.alert("Error", "Please fill correctly all fields to add a product");
                    return; 
                  }}>Add Product</Text>
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