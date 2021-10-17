# uber-eats

# Issue faced while working on this Project.

1️⃣ .toLocalestring() doesn't return the currency sign in android while it works in other platforms like web and ios.

https://github.com/facebook/react-native/issues/19410

2️⃣ Creating a new project in GCP for Price Api is not enabling the picing for it directly , if it doesn't works for your enable a maps embed api which
    will sure take to the billing page . (Used for Google Places AutoComplete Feature)
    https://www.npmjs.com/package/react-native-google-places-autocomplete
    
3️⃣ I was working on the web browser for testing instead of android simulator Yelp and GooglePlacesAutocomplete apis cannot be used in normal browser either run the below cmd
    chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security in Win + R or use
    https://cors-anywhere.herokuapp.com/corsdemo to sort out the Cors issue.
    
4️⃣ When installing mulitple packages few Classes like ToucableOpacity will be more thatn 1 package {react-native , react-native-gesture-handler} make sure to import them correctly 
otherwise they don't work.

# Additional Features added apart From Video 

1️⃣ Selecting multiple restaurant at the same time and display all the food items added in the cart in the viewCart through Scroll View .

2️⃣ Replace the YELP-API-KEY in Home.js and gcp credentials for places api in SearcBar.js

# Test the App 

## at https://expo.io/@siramkalyan/uber_eats_clonepspk use the Expo app to scan the QR and open the app.
