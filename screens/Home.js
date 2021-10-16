import React, { useState , useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurant } from '../components/home/RestaurantItems'
import {Divider} from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "6xj1I1tl_6CTVpgd2kAVpnasy-V6P0gskJSCp8rYWyzPzPQs_-vQjEtVL8Uec3MPwfO88SdU7YuNFJdWf4NIacJxf6oBmb4-qSzclGkR8mVma4JEAMaiekn6zfRmYXYx";


const Home = ({navigation}) => {
    const [restaurantData, setrestaurantData] = useState(localRestaurant);
    const [city, setCity] = useState("NYC")
    const [activeTab, setactiveTab] = useState("Delivery")

    const  getRestaurantHelp =  () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return  fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((res) => setrestaurantData(res.businesses.filter((businesses) => businesses
        .transactions && businesses.transactions.includes(activeTab.toLowerCase()))))
    };
    useEffect(() => {
       getRestaurantHelp();
       console.log(restaurantData);
    }, [city,activeTab])

return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, }}>
        <View style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 30,
        }}>
            <Header activeTab={activeTab}  setactiveTab={setactiveTab}/>
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantdata={restaurantData} navigation={navigation} />
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs/>
    </SafeAreaView>
)
}
export default Home
