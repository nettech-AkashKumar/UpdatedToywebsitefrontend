// import React, {useState, useEffect} from "react";
// // import axios from "axios";
// import { createContext, useContext,  useReducer } from "react";

// import reducer from "../Reducer/productReducer.jsx";

// const ProductContext = createContext();

// // const storedProduct = await axios.get("/");
// // console.log("sdeeef", storedProduct);
// const staticProductData = [
//   {id: 1, name:"T-Shirt", category:"menstopwear"},
//   {id: 2, name:"Kurti", category:"fusionwearwoman"},
//   {id: 3, name:"Kids Jacket", category:"kidswear"},
//   {id: 4, name:"headsphone", category:"electronics"},
//   {id: 5, name:"Blanket", category:"bed"},
// ]

// const intitialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   products: staticProductData,
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
//   categoryProduct: {},
//   //empty object
// };

// const ProductProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, intitialState);
//   // 2nd api call for single product
//   // const getSingleProduct = (allproduct, productId) => {
//   //   console.log("allpd", allproduct);
//   //   console.log("pdid", productId);
//   //   const singleProduct = allproduct.find((product) => product._id.toString() === productId.toString())
//   //   console.log("singleproduct", singleProduct);
//   //   return singleProduct;
//   // }

//   const getSingleProduct = (productId) => {
//     return staticProductData.find((product) => product.id === productId);
//   }

//   // const getCategoryProduct =  (allproduct, category) => {
//   //     const categoryProduct = allproduct.filter(
//   //       (product) =>
//   //         product?.category && product.category.toString().toLowerCase() ===
//   //         category?.toLowerCase()
//   //     );
//   //     console.log("category product", categoryProduct);
//   //     return categoryProduct;
//   //   }

//   const getCategoryProduct = (category) => {
//     return staticProductData.filter((product) => product.category.toLowerCase() === category.toLowerCase());
//   }


//     // const getTargetProduct = (allproduct, target, category) => {
//     //   if (!allproduct || !Array.isArray(allproduct)) {
//     //     return [];
//     //   }

//     const getTargetProduct = (target, category) => {
//       return staticProductData.filter((product) => product.category.toLowerCase() === category.toLowerCase() && product.target?.toLowerCase() === target?.toLowerCase());
//     }
  
//     //   // Filter products by category first
//     //   const targetProduct = allproduct
//     //     .filter(
//     //       (product) =>
//     //         product?.category?.toString().toLowerCase() ===
//     //         category?.toLowerCase()
//     //     )
//     //     .filter(
//     //       (product) =>
//     //         product?.target?.toString().toLowerCase() === target?.toLowerCase()
//     //     );
  
//     //   return targetProduct;
//     // };

   

//   return (
//     <ProductContext.Provider
//       value={{
//         ...state,
//         getSingleProduct,
//         getCategoryProduct,
//         getTargetProduct,
//         getLevelRange,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// // Custom Hook

// const  useProductContext = () => {
//   return useContext(ProductContext);
// };

// export { ProductProvider, ProductContext, useProductContext };
import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer.jsx";
import BASE_URL from "../../Config/config.js";

const ProductContext = createContext();

const initialState = {
  isLoading: true,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  categoryProduct: {}
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(`${BASE_URL}/api/products`);
      const products = res.data;
      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getSingleProduct = (allproduct, productId) => {
    return allproduct?.find(
      (product) => product?._id?.toString() === productId?.toString()
    );
  };

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useProductContext };


// import React from "react"
// import axios from "axios"
// import { createContext, useContext, useReducer, useEffect } from "react"

// import reducer from "../Reducer/productReducer.jsx"
// import BASE_URL from "../../Config/config.js";

// const ProductContext = createContext();

// const storedProduct = await axios.get(`${BASE_URL}/api/products`); 

// console.log("sdeeef", storedProduct);

// const intitialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
//   categoryProduct: {}
// };

// const ProductProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, intitialState)
//   console.log("props & state", state)

//   //second api call for single product
//   const getSingleProduct = (allproduct, productId) => {
//     console.log("allpd", allproduct)
//     console.log("pid", productId)
//     const singleProduct = allproduct?.find((product) => product?._id?.toString() === productId?.toString());
//     console.log("singlrproduct", singleProduct)
//     return singleProduct;
//   }

//   return (
//     <ProductContext.Provider
//     value={{...state, getSingleProduct}}
//     >
//     {children}
//     </ProductContext.Provider>
//   )

// };

// const useProductContext = () => {
//   return useContext(ProductContext)
// };

// export {ProductProvider, ProductContext, useProductContext}






// sir i think backend and frontend dono run krta hu wait


// sir ye bhi shi kaam kr rha h  ab  isme build ban rha h  config walka url add kr fir build bnate h   sir wo already h
