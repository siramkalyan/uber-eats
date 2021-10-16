import React from 'react'
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurant = [
    {
        name : "BeachSide Bar",
        image_url: "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
        categories : ["Cafe","Bar"],
        price : "$$",
        reviews : 1244,
        rating : 4.5
    },
    {
        name : "Benihana",
        image_url: "https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_266/post_10019854/thumb.png",
        categories : ["Cafe","Bar"],
        price : "$$",
        reviews : 1244,
        rating : 4.5
    },
    {
        name : "BeachSide Bar",
        image_url: "https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg",
        categories : ["Cafe","Bar"],
        price : "$$",
        reviews : 1244,
        rating : 4.5
    },
    {
        name : "Benihana",
        image_url: "https://lh3.googleusercontent.com/dADO2v-WVRUbclWerasOYLSJ0VRwrvuQc8_7jkjD3eE5gNfH1q9P_O7i1BJtoMHuGPMb67GGXXYL-chjLITHnXolqYM-sfMyvzlWX74=w1000",
        categories : ["Cafe","Bar"],
        price : "$$",
        reviews : 1244,
        rating : 4.5
    },
]
export default function RestaurantItems({navigation, ...props}) {
    return (
       <>
        { props.restaurantdata &&  props.restaurantdata.map((rest,indes) => (
            
        <TouchableOpacity activeOpacity = {1} style={{marginBottom : 10}} onPress={() => navigation.navigate("RestaurantDetail", {name : rest.name,
        image : rest.image_url,
        price : rest.price,
        rating : rest.rating,
        reviews : rest.review_count,
        categories:rest.categories})} key={indes}>
        <View style={{ backgroundColor : 'white' , padding : 15}} >
          
            <RestaurantImage image={rest.image_url}  />
        
            <RestaurantInfor name={rest.name} rating={rest.rating}/>
        </View>
        
        </TouchableOpacity>
        ))}
        </>
    )
}
const RestaurantImage = (props) => (< View style={{margin : 5}}><Image
    source={{
        uri: props.image
    }}
    style={{ width: '100%', height: 150 }} />
    <TouchableOpacity style={{position : 'absolute',right : 20, top : 20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity></View>
);

const RestaurantInfor = (props) =>
(
    
    <View style={{
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center',
        marginTop : 10,
        paddingLeft : 10
    }}>
        <View >
        <Text style={{
            fontSize:15,
            fontWeight:'bold'
        }}>{props.name}</Text>
        <Text style={{
            fontSize:13,
            color : "gray",
        }}>30-45 mins</Text>
        </View>
        <View style={{backgroundColor : "#000",height : 30,width :30 , alignItems : 'center' ,borderRadius : 30, justifyContent : 'center'
        
    }}>
        <Text style={{color:"#fff",fontWeight:'bold', padding : 5}}>{props.rating}</Text>
        </View>
    </View>
);
