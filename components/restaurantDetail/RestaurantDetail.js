import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from './About'
import MenuItem from './MenuItem'
import ViewCart from './ViewCart'

export default function RestaurantDetail({route,navigation}) {
    return (
        <View>
            <About route={route}/>
           <Divider width={1.8} style={{marginVertical : 20}} /> 
            <MenuItem restaurantName = {route.params.name}/>
            <ViewCart navigation={navigation} restaurantName = {route.params.name} />
        </View>
    )
}
