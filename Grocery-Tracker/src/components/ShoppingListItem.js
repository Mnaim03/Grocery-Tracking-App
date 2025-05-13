import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import CategoryBadge from './CategoryBadge';
import { styles } from '../styles/ShoppingListItemStyle';

const ShoppingListItem = ({ name, quantity, price, category }) => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <View style={styles.item}>
            <View style={styles.titleRow}>
                <Pressable 
                    style={[styles.checkbox, isChecked && styles.checked]}
                    onPress={() => setIsChecked(prevValue => !prevValue)}
                >
                    {isChecked && (
                        <Text style={styles.checkmark}>✓</Text>
                    )}
                </Pressable>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailText}>Quantity: {quantity}</Text>
                        <Text style={styles.detailText}>Price: €{price}</Text>
                        <CategoryBadge category={category} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ShoppingListItem;