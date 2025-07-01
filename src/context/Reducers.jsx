import axios from "axios"
import { jwtDecode } from "jwt-decode"
import BASE_URL from "../Config/config.js";

export const cartReducer = (state, action) => {
    let updatedCart;
    switch (action.type) {
        case "SET_CART":
            return { ...state, cart: action.payload || [] };

        case "ADD_TO_CART": {
            console.log("Incoming payload in ADD_TO_CART", action.payload);

            const existingProduct = state.cart.find(
                (item) => item._id === action.payload._id);
            console.log("existinng", existingProduct)

            if (existingProduct) {
                updatedCart = state.cart.map((item) => item._id === action.payload._id ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.new_price } : item)
            } else {
                updatedCart = [...state.cart, { ...action.payload, quantity: 1, subtotal: action.payload.new_price }]
            }
            return { ...state, cart: updatedCart }
        };

        case "REMOVE_FROM_CART":
            const { _id: removeId, userId, productId } = action.payload;
            axios.delete(`${BASE_URL}/api/cart/delete-cart-item`, {
                data: { _id: removeId, userId, productId }
            })
                .then(response => console.log("Item removed:", response.data))
                .catch(error => console.log("Error removing item:", error));

            updatedCart = state.cart.filter((item) => item._id !== removeId)
            return { ...state, cart: updatedCart }

        case "CHANGE_CART_QUANTITY":
            const { _id, quantity } = action.payload;
            console.log('_id, quantity', action.payload)

            if (!_id || quantity === undefined) {
                console.error("Missing required fields in CHANGE_CART_QUNATITY", action.payload)
                return state;
            }
            updatedCart = state.cart.map((item) => item._id === _id ? { ...item, quantity, subtotal: quantity * item.new_price } : item)
            console.log('updatedCart', updatedCart)
            return { ...state, cart: updatedCart }

        case "CLEAR_CART":
            return { ...state, cart: [] }

        default: return state;
    }
}