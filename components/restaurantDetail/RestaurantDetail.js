import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from './About'
import MenuItem from './MenuItem'
import ViewCart from './ViewCart'
 const food = [{
    title : "Tandoori Veg",
    description : "Tandoor amazing non-veg dish combined with veg spices to  make it delicious",
    price : "$19.20",
    image : "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
},
{
    title : "Lasanga",
    description : "Tandoor amazing non-veg dish combined with veg spices to  make it delicious",
    price : "$19.20",
    image : "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
},
{
    title : "Mango Jucie",
    description : "Tandoor amazing non-veg dish combined with veg spices to  make it delicious",
    price : "$19.20",
    image : "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
},
{
    title : "Biriyani",
    description : "Tandoor amazing non-veg dish combined with veg spices to  make it delicious",
    price : "$19.20",
    image : "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
},];

export default function RestaurantDetail({route,navigation}) {
    return (
        <View>
            <About route={route}/>
           <Divider width={1.8} style={{marginVertical : 20}} /> 
            <MenuItem restaurantName = {route.params.name} food={food}/>
            <ViewCart navigation={navigation}  />
        </View>
    )
}
