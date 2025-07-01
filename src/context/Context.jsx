import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers"
import axios from "axios"
import { jwtDecode } from "jwt-decode";
import BASE_URL from "../Config/config.js";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const token = localStorage.getItem("token")?.trim();
    let userId = null;
    if (token) {
        try {
            const decoded = jwtDecode(token);
            userId = decoded.id;
        } catch (error) {
            console.log("Error decoding token", error)
        }
    }
    console.log("UserId", userId)

    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    });
    useEffect(() => {
        if (userId) {
            localStorage.setItem(`cart_${userId}`, JSON.stringify(state.cart))
        }
    }, [state.cart, userId]);

    // save cart state to localstorage
    useEffect(() => {
    if(userId) {
        const savedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        dispatch({type: "SET_CART", payload: savedCart})
    }
    }, [userId]);

    useEffect(() => {
        const fetchCartItems = async () => {
            if(!userId) {
                return;
            }
            try {
                const response = await axios.get(`${BASE_URL}/api/cart/get`, {
                    params: {userId},
                });
                const data = response.data.data;
                localStorage.setItem("cart", JSON.stringify(data));
                if(response.status === 200) {
                    dispatch({type: "SET_CART", payload: data})
                }else {
                    dispatch({type: "SET_CART", payload: []})
                }
            }catch(error) {
                console.error("Error fetching cart items:", error)
            }
        };
        fetchCartItems();
    }, [userId]);




    // useEffect(() => {
    //     const fetchCartItems = async () => {
    //         if (!userId) {
    //             return;
    //         }
    //         try {
    //             const savedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    //             if (savedCart && savedCart.length > 0) {
    //                 dispatch({ type: "SET_CART", payload: savedCart })
    //             } else {
    //                 const response = await axios.get(`${BASE_URL}/api/cart/get`, {
    //                     params: { userId },
    //                 });
    //                 const data = response.data.data;
    //                 if (Array.isArray(data)) {
    //                     dispatch({ type: "SET_CART", payload: data })
    //                     localStorage.setItem(`cart_${userId}`, JSON.stringify(data))
    //                 }
    //             }
    //         }

    //         catch (error) {
    //             console.error("Error fetching cart items:", error)
    //         }
    //     };
    //     fetchCartItems();
    // }, [userId]);


    return (
        <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
    )
};

// hook for consuming context
export const CartState = () => {
    return useContext(CartContext);
}