import React,{useState} from 'react'
import { View, Text,  TouchableOpacity } from 'react-native'

export default function Header(props) {
    const [activeTab, setactiveTab] = useState("Delivery")
    return (
        <View style={{flexDirection:"row",alignSelf:"center"}}>
           <HeaderButton text="Delivery" 
           btnColor="black" 
           textColor="white" 
           activeTab={props.activeTab} 
           setactiveTab={props.setactiveTab}/>
            <HeaderButton text="Pickup"
             btnColor="white" 
             textColor="black"
             activeTab={props.activeTab} 
           setactiveTab={props.setactiveTab}/>
        </View>
    )
}
const HeaderButton = (props) => (
    <TouchableOpacity 
    style={{backgroundColor:props.activeTab === props.text ? "black" : "white",
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30}}
    onPress = {() => props.setactiveTab(props.text)}
    > 

    <Text style={{color:props.activeTab === props.text ? "white" : "black"}}>{props.text}</Text>
    
    </TouchableOpacity>
    );

