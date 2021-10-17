import React , {useState }from 'react'
import { View, Text ,StyleSheet ,TouchableOpacity, ScrollView } from 'react-native'
import {useSelector} from 'react-redux'
import { Modal } from 'react-native'
import OrderItem  from './OrderItem'
import firebase from '../../firebase'
import { NavigationContainer } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
export default function ViewCart({navigation}) {
    const [ModalVisible, setModalVisible] = useState(false);
    const [Loading, setLoading] = useState(false);
    console.log(ModalVisible + "📱");
     const {items,restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
     const total=items.map((item => Number(item.price.replace('$','')))).reduce((prev,curr) => prev + curr,0);
     const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
     console.log(totalUSD + "💰💲");
     const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        },
    
        modalCheckoutContainer: {
          backgroundColor: "white",
          padding: 16,
          height: 500,
          borderWidth: 1,
        },
    
        restaurantName: {
          textAlign: "center",
          fontWeight: "600",
          fontSize: 18,
          marginBottom: 10,
        },
    
        subtotalContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        },
    
        subtotalText: {
          textAlign: "left",
          fontWeight: "600",
          fontSize: 15,
          marginBottom: 10,
        },
      }); 

      const addOrderToFirebase = () =>
        {
          setLoading(true);
          const db = firebase.firestore();
          db.collection("orders").add(
            {
              items : items,
              restaurantName : restaurantName,
              createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            }
          ).then(()=>{
            setTimeout(() =>{
               setLoading(false);
               navigation.navigate("OrderCompleted");
              
            },2500);
          });
         
        };

     const checkoutModalContent = () =>{
         return(<>
         <View style={styles.modalContainer}>
           <View style={styles.modalCheckoutContainer} >
             <ScrollView>
             <Text style={styles.restaurantName}>Cart Summary</Text>
             {items.map((item,index) =>
             (
               <OrderItem key={index} item={item} />
             ) )}
             <View style={styles.subtotalContainer} >
               <Text style={styles.subtotalText}>Subtotal</Text>
               <Text>{totalUSD}</Text>
             </View>
             <View style={{
               flexDirection : 'row',
               justifyContent : 'center' 
             }} >
               <TouchableOpacity style={{
                 marginTop : 20,
                 backgroundColor : "black",
                 alignItems : 'center',
                 padding : 13,
                 borderRadius : 30,
                 width : 300,
                 position : 'relative',
               }}
                onPress={() => {addOrderToFirebase();
                setModalVisible(false);}}>
                 <Text style={{
                   color : "white",
                   fontSize : 20
                 }}>Checkout</Text>
                 <Text style={{position : 'absolute', right : 20,
                 color : 'white',
                 fontSize : 15,
                 top : 17,

                }} >{total ? "💲" + totalUSD : ""}</Text>
               </TouchableOpacity>
             </View>
             </ScrollView>
           </View>
        </View>
         </>
         );
     };
    return (
        <>
         <Modal
        animationType="slide"
        visible={ModalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
        {total ? 
        <View style={{
            
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "absolute",
                bottom : 0,
                zIndex: 999,
        }} >
        <View style={{
            flexDirection : "row",
            justifyContent :"center",
            width : "100%",

        }}>
            <TouchableOpacity style={{
                marginTop : 20 ,
                backgroundColor : 'black',
                alignItems : 'center',
                padding : 13,
                borderRadius : 30,
                width : 300,
                position : 'relative',
                flexDirection : 'row',
                justifyContent : 'center',
                

            }} onPress={()=>setModalVisible(true)}>
            <Text style={{color : "white" , fontSize : 20 ,marginRight : 30 }}>View Cart</Text>
            <Text style={{color : "white" , fontSize : 20}}>{ "💲" + totalUSD}</Text>
            </TouchableOpacity>
        </View>
        </View> : <View></View> }
        {Loading ? <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView style={{
            height : 200,
          }} source={require("../../assets/animations/scanner.json")}
          autoPlay
          speed={3} />
        </View> : <></>}
        </>
    )
}
