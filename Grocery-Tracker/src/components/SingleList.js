import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


//Visualizzazione della singola lista. Una list la modelliamo come segue : 
//list è un oggetto javascript fatto in questo modo: 
/*
list: {
    id_list: 
    title:
    items=[
        {
        name:Pane, 
        quantity: 2, 
        price: 2
        category: Other 

        },

        {
        ITEM2
        },
        
        {
            ITEM3
        },...ecc
    ]
}
*/ 
const SingleList = ({ list }) => {

    const navigation = useNavigation(); 
    const goToDetails = ()=>{
        navigation.navigate("Details",list); 
    }

  

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
            }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>
                    {list.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default SingleList;