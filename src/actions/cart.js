export const RECEIVE_CART = 'RECEIVE_CART'
export const ADD_TO_CART = 'ADD_TO_CART'

export function getcart (cart) {
    return {
        type: RECEIVE_CART,
        cart
    }
}

export function addToCart (cartItem) {
    return {
        type: ADD_TO_CART,
        cartItem
    }
};