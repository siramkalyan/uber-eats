import React from 'react'
import { View, Text ,Image} from 'react-native'
import MenuItem from './MenuItem';
/*
const yelpRestaurantInfo = {
    name: "Indian Tandoori",
    image : "https://previews.123rf.com/images/prpicturesproduction/prpicturesproduction1905/prpicturesproduction190500143/123272498-3d-render-of-cafe-bar-restaurant-nobody-indoor-empty-coffee-shop-interior-daytime-with-wooden-design.jpg",
    reviews : '1500',
    price : '$$',
    rating : 5,
    categories : [{title : 'Indian'}, {title : "Comfort Food"} , {title : 'Coffee Bar'}],
}

const {name,image,reviews,price,rating,categories} = yelpRestaurantInfo ;

const formattedCategories = categories.map((cat) => cat.title).join(".");

const descr =`${formattedCategories} ${price ? '.' + price : ''} + 🎫 + ${rating} ⭐ + (${reviews}+)`; */

export default function About(props) {
    const { name, image, price, reviews, rating, categories } =
    props.route.params;
    
const formattedCategories = categories.map((cat) => cat.title).join(".");

const descr =`${formattedCategories} ${price ? '.' + price : ''} + 🎫 + ${rating} ⭐ + (${reviews}+)`;
    return (
        <View>
           <RestaruantImage image={image} />
           <RestaurantName title={name} />
            <RestauarntDesc descr={descr} />
        </View>
    )
}

const RestaruantImage = (props) =>
(
    <Image source={{uri : props.image}} 
    style={{width : "100%" , height : 180}} />
);

const RestaurantName = (props)  => ( <Text style={{
    fontSize : 29,
    fontWeight : "600",
    marginTop : 10 ,
    marginHorizontal : 15
}}>{props.title}</Text>)

const RestauarntDesc = (props) => ( <Text 
    style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
      >{props.descr}</Text>)