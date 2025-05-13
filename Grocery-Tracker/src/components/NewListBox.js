import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  TextInput
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';


/*Passiamo setLists dalla HomeScreen , per aggiornare la lista di ListItem col nuovo inserimento */
const NewListBox = ({lists , setLists}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [listTitle , setListTitle] = useState(''); 
//Funzione per aggiungere la lista 
const addListToOthers = (titoloLista)=>{
  const newList = {
    id: Date.now(), //Timestamp in millisecondi , per avere univocità dell'id di ciascuna lista  
    title:titoloLista, 
  }
  setLists((prevLists)=> [...prevLists , newList])
  Alert.alert(
    "List Created ✅",
    `"${titoloLista}" has been created successfully!`,
    [
      {
        text: "OK",
        style: "default",
        onPress: () => { 
      }
}],
    {
      cancelable: true,
    }
  );
  setModalVisible(false)
 
}


  return (
    <View style={styles.container}>
      <View style={styles.newListContainer}>
        <View style={styles.newListContent}>
          <View style={styles.textContainer}>
            <Text style={styles.newListTitle}>Make a New List</Text>
            <Text style={styles.newListSubtitle}>
              Create list, collaborate, make your life easy
            </Text>
          </View>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Create New List</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter list name"
              onChangeText={(text)=>{setListTitle(text)}}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity 
                style={styles.modalCancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalCreateButton}
                onPress={()=>{addListToOthers(listTitle)}} //Al press del bottone create , aggiungiamo la lista creata a tutte le altre e la visualizziamo nell'home
              >
                <Text style={styles.modalCreateText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  newListContainer: {
    backgroundColor: '#2ecc71',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newListContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  newListTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  newListSubtitle: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Stili per il Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalCancelButton: {
    flex: 1,
    marginRight: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  modalCreateButton: {
    flex: 1,
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 12,
  },
  modalCancelText: {
    textAlign: 'center',
    color: '#2c3e50',
    fontWeight: '600',
    fontSize: 16,
  },
  modalCreateText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default NewListBox;