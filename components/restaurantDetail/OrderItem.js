import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native';

export default function OrderItem({item}) {
    const {title,price,restaurantName} = item;
    let price1 = price.toString();
    price1 = price1.slice(0, (price1.indexOf(".")) + 2 + 1);
    return (
        
        <View style={{
            flexDirection : 'row',
            justifyContent :'space-between',
            padding : 20,
            borderBottomWidth : 1,
            borderBottomColor : "#999",
        }}>
            <Text style={{
                fontWeight : "600",
                fontSize : 16,
            }}>{title}</Text>
            
            <Text style={{
                fontWeight : "600",
                fontSize : 16,
            }}>{restaurantName}</Text>
            <Text style={{
                opacity : 0.7,
                fontSize : 16,
            }}>{price1}</Text>
        </View>
        
    )
}
