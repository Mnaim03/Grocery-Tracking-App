import React , {useState} from 'react';
import {Text, View, SafeAreaView, Button, FlatList, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';
import ShoppingListItem from '../components/ShoppingListItem';
 import ListItemStyles from '../styles/ListItemStyle';
 import {sampleLists} from "./HomeScreen";
import DropDownPicker from 'react-native-dropdown-picker';
import { insertItem } from '../data/db';

const PopUp = ({ visible, setVisible, items }) => {
    const [name,setName] = React.useState('');
    const [quantity,setQuantity] = React.useState();
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [pickerItems, setPickerItems] = React.useState([
      { label: 'Fruits', value: 'Fruits' },
      { label: 'Vegetables', value: 'Vegetables' },
      { label: 'Meat', value: 'Meat' },
      { label: 'Dairy', value: 'Dairy' },
      { label: 'Snacks', value: 'Snacks' },
      { label: 'Beverages', value: 'Beverages' },
      { label: 'Other', value: 'Other' },
    ]);

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
                <View>
                  <DropDownPicker
                    open={open}
                    value={category}
                    items={pickerItems}
                    setOpen={setOpen}
                    setValue={setCategory}
                    setItems={setPickerItems}
                    placeholder="Select a category..."
                    style={[
                      ListItemStyles.pickerInput
                    ]}
                    dropDownContainerStyle={{ borderColor: '#32916A' }}
                    textStyle={{ fontSize: 20, color: '#32916A' }}
                    placeholderStyle={{ color: 'gray' }}
                    selectedItemLabelStyle={{ color: '#32916A' }}
                    selectedItemContainerStyle={{ backgroundColor: '#32916A' }}
                    selectedItemTextStyle={{ color: 'white' }}
                  />
                </View>

                <Text style={ListItemStyles.addProdBtn} onPress={()=>{
                  if (name?.trim() !== "" && price?.trim() !== "" && !isNaN(price) && quantity?.trim() !== "" && !isNaN(quantity) && category?.trim() !== "") {
                    //insertItem(name, quantity, price, category, id);
                  
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

function SingleListScreen({ navigation,route }) {
  const items = route.params?.items || []; // fallback a array vuoto se non esiste
  const length = items.length;
  const id = route.params?.id;

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PopUp visible={visible} setVisible={setVisible} items={items} />
      {length !== 0 ? (
        <>
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
          <TouchableOpacity onPress={() => setVisible(true)}>
            <View style={ListItemStyles.addFromZero}>
              <Text style={ListItemStyles.plusText}>+</Text>
            </View>
          </TouchableOpacity>
          <Button title="OK" onPress={() => navigation.goBack()} />
        </>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={ListItemStyles.zeroProd}>
            <Text style={ListItemStyles.zeroProdTitle}>Add Product</Text>
            <Text style={ListItemStyles.zeroProdSub}>
              Add the first Product to the list by clicking the button below.
            </Text>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <View style={ListItemStyles.addFromZero}>
                <Text style={ListItemStyles.plusText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={ListItemStyles.goBack} onPress={() => navigation.goBack()}>
            Go Back
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}


export default SingleListScreen;