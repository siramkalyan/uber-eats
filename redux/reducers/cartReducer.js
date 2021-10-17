let defaultState = {
    selectedItems : {items : [] ,restaurantName : "",}
}

let cartReducer = (state = defaultState , action) => 
{
    switch(action.type){
        case 'ADD_TO_CART': {
            let newState = {...state};
            console.log(JSON.stringify(action.payload )+ "🏋️‍♀️🏋️‍♂️🏋️‍♂️⚖⚖⚖");
            if(action.payload.checkboxValue){
                
            console.log('ADD_To_CART');
            newState.selectedItems = {
                items : [...newState.selectedItems.items,
                action.payload],
                restaurantName : action.payload.restaurantName,   
            };}
            else{
                console.log("REMOVE_FROM_CART");
                newState.selectedItems = {
                    items : [
                        ...newState.selectedItems.items.filter((item) => (item.title !== action.payload.title || item.restaurantName !== action.payload.restaurantName) ),

                    ],
                    restaurantName  : action.payload.restaurantName,
                };

            }
            
            console.log(newState , "👌");
            return newState;
        }
        default :
        return state;
    }
}

export default cartReducer;