import { ADD_TO_CART, INCREASE_CART_QUANTITY, DECREASE_CART_QUANTITY } from '../constants'

export const addToCart = (data) => {
    console.warn('action data', data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const increaseCartQuantity = (data) => {
    return {
        type: INCREASE_CART_QUANTITY,
        data: data
    }
}

export const decreaseQuantity = () => {
    return {
        type: DECREASE_CART_QUANTITY,

    }
}