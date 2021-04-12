
import { ADD_TO_CART, INCREASE_CART_QUANTITY, DECREASE_CART_QUANTITY } from '../constants'


const initialState = {
    cartData: [],
    quantity: 1,

}


export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('reducer data', action)
            return {
                ...state,
                cartData: action.data
            }

        case INCREASE_CART_QUANTITY:
            return {
                ...state,
                quantity: state.quantity + 1
            }

        case DECREASE_CART_QUANTITY:
            return {
                ...state,
                quantity: state.quantity - 1
            }

        default:
            return state;
    }

}