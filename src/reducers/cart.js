import { RECEIVE_CART } from '../actions/cart'
// import { ADD_TO_CART } from '../actions/cart'

export default function items (state= {}, action) {
    switch (action.type) {
        case RECEIVE_CART: 
            console.log("cart reducer", action.cart)
            return {
                ...state,
                ...action.cart
            };

        // case ADD_TO_CART: 
        //     return {
        //         ...state,
        //         ...action.cart:
        //     };

        default:
            return state;
    }
}