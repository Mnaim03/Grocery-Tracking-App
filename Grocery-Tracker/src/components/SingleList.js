import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa l'icona

const SingleList = ({ list, onDelete }) => {
    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate("Details", list); 
    };

    const showAlert=()=>{
        Alert.alert(`Are you sure you want to delete ${list.title}?`, "This operation is irreversible", [
            {
                text:'Cancel',
                onPress:()=>{return;}
            },
            {
                text:'OK',
                onPress:()=>{onDelete(list.id)}
            }
        ])
    }

    const handleDelete = () => {
        showAlert(); 
    };

    return (
        <TouchableOpacity 
            onPress={goToDetails}
            activeOpacity={0.7}
        >
            <View style={{
                backgroundColor: 'white',
                padding: 16,
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#ddd',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
                flexDirection: 'row', // Usa flexDirection per allineare l'icona a destra
                justifyContent: 'space-between', // Aggiungi spazio tra il titolo e l'icona
                alignItems: 'center', // Allinea verticalmente il titolo e l'icona
            }}>
                <Text style={{ fontSize: 16, fontWeight: '600', flex: 1 }}>
                    {list.title}
                </Text>

                {/* Icona del cestino */}
                <TouchableOpacity onPress={handleDelete}>
                    <Icon name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default SingleList;