import React from 'react'
import { View, Text , StyleSheet, ScrollView, Image} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
export const food = [{
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

export default function MenuItem(props) {
    
const dispath = useDispatch();
const selectItem = (item,checkboxValue) => dispath({
    type : 'ADD_TO_CART',
    payload : {...item,
         restaurantName : props.restaurantName , 
         checkboxValue : checkboxValue
        },
})
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);
    
    const isFoodinCart  =  (food,cartItems) => Boolean(cartItems.find((item => item.title === food.title)));
        
    
    console.log(JSON.stringify(cartItems) + '🛒');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
    {food.map((foodItem,index) => (
        <View key={index}>
        <View style={styles.menuItemstyle}>
        <BouncyCheckbox iconStyle={{borderRadius : 0,borderColor : "lightgray" , }} fillColor = "green" isChecked={ isFoodinCart(foodItem,cartItems)}
        onPress ={(checkboxValue) => selectItem(foodItem,checkboxValue)}/>
        <FoodInfo food={foodItem} />
        <FoodImg food={foodItem}/>
        </View>
        <Divider width={0.5}  orientation="vertical" 
        style={{marginHorizontal : 20}}/>
        </View>
      ))}
        </ScrollView>
    
    )
};
const styles = StyleSheet.create({
   menuItemstyle :  {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 10,
    },
    titleStyle : {
        fontSize : 19,
        fontWeight : "600"
        }
})
const FoodInfo = (props) => (
    
    <View style={{width : 240 , justifyContent : 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImg  = (props) =>
( 
<View>
    <Image source={{uri : props.food.image}} style={{height : 100, width : 100 , borderRadius : 8}}/>
</View>
);