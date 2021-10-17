import React from 'react'
import { View, Text ,ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}) {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <GooglePlacesAutocomplete
            query={{ key: "your gcp credentials" }}
            placeholder="Search"
            onPress={(data, details = null) => {
              const city=data.description.split(',')[0];
              console.log(data);
              cityHandler(city);
            }}
          onFail={(error) => console.error(error)}
          requestUrl={{
          url:
            'https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} 
            styles={{
              textInput: {
                backgroundColor: "#eee",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
              },
              textInputContainer: {
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              },
            }}
            renderLeftButton={() => (
              <View style={{ marginLeft: 10 }}>
                <Ionicons name="location-sharp" size={24} />
              </View>
            )}
            renderRightButton={() => (
              <View
                style={{
                  flexDirection: "row",
                  marginRight: 8,
                  backgroundColor: "white",
                  padding: 9,
                  borderRadius: 30,
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="clockcircle"
                  size={11}
                  style={{ marginRight: 6 }}
                />
                <Text>Search</Text>
              </View>
            )}
            
          />
        </View>
      );
    }
