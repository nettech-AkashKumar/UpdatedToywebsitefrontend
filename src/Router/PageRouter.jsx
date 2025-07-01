import React from "react";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsDetailsPage from "../pages/productsdetailspage/ProductsDetailsPage";
import Login from "../components/ProductComponents/login/Login";
import Registration from "../components/ProductComponents/registration/Registration";
import ForgotPassword from "../components/ProductComponents/forgotpassword/ForgotPassowrd";
import OrderHistory from "../components/ProductComponents/orderhistory/OrderHistory";
import Wishlist from "../components/ProductComponents/whishlist/Wishlist";
import Address_Book from "../components/ProductComponents/address_book/Address_Book";
import Recent_Activity from "../components/ProductComponents/recent_activity/Recent_Activity";
import { Auth0Provider } from "@auth0/auth0-react";
import ResetPassword from "../components/ProductComponents/forgotpassword/ResetPassword";
import Support_Help from "../components/ProductComponents/support_help/Support_Help";
import Rating_Reviews from "../components/ProductComponents/rating_reviews/Rating_Reviews";
// import AccountDetails from "../pages/AccountDetails/AccountDetails";
import Order_Tracking from "../components/ProductComponents/order_tracking/Order_Tracking";
import Admin_Layouts from "../layouts/admin_layouts/Admin_Layouts";
import User_Management from "../components/adminall-componets-pages/user_management/User_Management";
import Orders from "../components/adminall-componets-pages/orders/Orders";
import Stocks from "../components/adminall-componets-pages/stocks/Stocks";
import Product from "../components/adminall-componets-pages/product/Product";
import Cart from "../pages/Cart/Cart";
import EnterpinModal from "../components/CartComponent/EnterpinModal";
import DeliveryDetailspage from "../pages/DeliveryDetails/DeliveryDetails";
import PaymentOption from "../pages/Paymnetoptionpage/PaymentOption";
import Success from "../pages/Success/Success";
import SomethingWntWrong from "../pages/SomethingWntWrong/SomethingWntWrong";
import Faq from "../pages/FAQ/Faq";
import Policy from "../pages/Policy/Policy";
import Sales from "../components/adminall-componets-pages/sales/Sales";
import Analytics from "../components/adminall-componets-pages/analytics/Analytics";
import Settings_Add_Productoffer from "../components/adminall-componets-pages/settings_add_productoffer/Settings_Add_Productoffer";
import LogoutModal from "../components/HomeComponents/Logout/LogoutModal";
import Category from "../components/adminall-componets-pages/Category/Category";
import FilterPage from "../pages/FilterPage";
import Dashboard from "../components/adminall-componets-pages/dashboard/Dashbaord";
import ProtectedRoute from "../components/ProtectedRoute";
import Account_Details from "../components/ProductComponents/account_details/Account_Details";
const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },

    // this path is for men , women, kids beauty and electronics page
    {
      path: "/:category",
      element: (
        <>
          <FilterPage />
        </>
      ),
    },
    //this path is for its men, women, kids, beauty & electronics  subcategories
    {
      path: "/:category/:subcategory",
      element: (
        <>
          <ProductPage />
        </>
      )
    },
    //this path is for its men, women, kids, beauty & electronics  subcategories now it also include gender
    {
      path: "/:category/:gender/:subcategory",
      element: (
        <>
          <ProductPage />
        </>
      )
    },

    // this page is to render product details page on click on card
    {
      path: "/productsdetails/:id",
      element: (
        <>
          <ProductsDetailsPage />
        </>
      ),
    },

    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/logout",
      element: (
        <>
          <LogoutModal />
        </>
      ),
    },

    {
      path: "/registration",
      element: (
        <>
          <Registration />
        </>
      ),
    },
    {
      path: "/forgotpassword",
      element: (
        <>
          <ForgotPassword />
        </>
      ),
    },

    {
      path: "/resetpassword/:token",
      element: (
        <>
          <ResetPassword />
        </>
      ),
    },
    {
      path: "/bag",
      element: (
        <>
          <Cart />
        </>
      ),
    },
    {
      path: "/enterpin",
      element: (
        <>
          <EnterpinModal />
        </>
      ),
    },
    {
      path: "/accountdetails",
      element: (
        <>
          <Account_Details/>
        </>
      ),
    },
    {
      path: "/orderhistory",
      element: (
        <>
          <OrderHistory />
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
          <Wishlist />
        </>
      ),
    },
    {
      path: "/address_book",
      element: (
        <>
          <Address_Book />
        </>
      ),
    },
    {
      path: "/recent_activity",
      element: (
        <>
          <Recent_Activity />
        </>
      ),
    },

    {
      path: "/support_help",
      element: (
        <>
          <Support_Help />
        </>
      ),
    },
    {
      path: "/order_tracking",
      element: (
        <>
          <Order_Tracking />
        </>
      ),
    },
    {
      path: "/rating-reviews",
      element: (
        <>
          <Rating_Reviews />
        </>
      ),
    },
    {
      path: "/deliverydetails",
      element: (
        <>
          <DeliveryDetailspage />
        </>
      ),
    },
    {
      path: "/paymentoption",
      element: (
        <>
          <PaymentOption />
        </>
      ),
    },
    {
      path: "/success",
      element: (
        <>
          <Success />
        </>
      ),
    },

    {
      path: "/faq",
      element: (
        <>
          <Faq />
        </>
      ),
    },
    {
      path: "/policy",
      element: (
        <>
          <Policy />
        </>
      ),
    },
    {
      path: "*",
      element: <SomethingWntWrong />,
    },

    // {
    //   path: "/admin",
    //   element: <Admin_Layouts />,
    //   children: [
    //     {
    //       path: "dashboard",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "product",
    //       element: <Product />,
    //     },
    //     {
    //       path: "user_management",
    //       element: <User_Management />,
    //     },
    //     {
    //       path: "category",
    //       element: <Category />,
    //     },
    //     {
    //       path: "orders",
    //       element: <Orders />,
    //     },
    //     {
    //       path: "sales",
    //       element: <Sales />,
    //     },
    //     {
    //       path: "stocks",
    //       element: <Stocks />,
    //     },
    //     {
    //       path: "analytics",
    //       element: <Analytics />,
    //     },
    //     {
    //       path: "settings",
    //       element: <Settings_Add_Productoffer />,
    //     },

    //   ],
    // },

    {
      path: "/admin",
      element: <ProtectedRoute allowedRoles={["admin"]} />,
      children: [
        {
          path: "",
          element: <Admin_Layouts />,
          children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "product", element: <Product /> },
            { path: "user_management", element: <User_Management /> },
            { path: "category", element: <Category /> },
            { path: "orders", element: <Orders /> },
            { path: "sales", element: <Sales /> },
            { path: "stocks", element: <Stocks /> },
            { path: "analytics", element: <Analytics /> },
            { path: "settings", element: <Settings_Add_Productoffer /> },
          ],
        },
      ],
    },

  ]);
  return (
    <>
      {/* dev-fl1of3jkpiat3tta */}
      <Auth0Provider
        domain="dev-fl1of3jkpiat3tta.us.auth0.com"
        clientId="3ezkXfealDrtJKNVeyF7NAY9M6fRyd3V"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </>
  );
};

export default PageRouter;
