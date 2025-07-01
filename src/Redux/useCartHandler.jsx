import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import BASE_URL from "../Config/config.js";

export const useCartHandler = (product) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart?.cart || [])

    //decode user id
    const token = localStorage.getItem("token")?.trim();
    let userId = null;
    if(token) {
        try {
            const decoded = jwtDecode(token)
            userId = decoded.id;
        }catch(error) {
            toast.error("Error decoding user token")
        }
    }

    const addToCart = async () => {
        if(!userId) {
            toast.error("Please login to add items to cart!")
            return;
        }
        if(!product?._id) {
            toast.error("Invalid product data");
            return;
        }
        try {
            const response = await axios.post(`${BASE_URL}/api/cart/add`, {
                userId,
                productId:product._id,
                title:product.title,
                subtitle: product.subtitle,
                 image: product.image,
                 old_price: product.old_price,
                 new_price: product.new_price,
                size:product.size,
                discount: product.discount,
                brand: product.brand,
                quantity: 1,
            }, {
                headers: {
                  "Content-Type": "application/json",  
                }
            });
            const data = response.data;
            if(response.status === 200 && data.data && data.data._id) {
                dispatch({
                    type: "ADD_TO_CART",
                    payload: data.data,
                });
                // save to localstoage
                const existing = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
                const updated = [...existing, data.data]
                localStorage.setItem(`cart_${userId}`, JSON.stringify(updated))
                toast.success("Item added to cart!")
            }else {
                toast.error("Failed to add item to cart")
            }
        }catch(error) {
            toast.error("Error adding to cart. Try again")
        }
    }
    return {addToCart}
}