
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'
const initialState = {
    cartData: [
    ],
    age: 25
}


export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('reducer data', action)
            return {
                ...state,
                cartData: action.data
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                age: action.data.age + 1
            }

        default:
            return state;
    }

}