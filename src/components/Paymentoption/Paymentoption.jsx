import React, { useState, useEffect } from 'react'
import './Paymentoption.css'
// import PayUPI from '../../assets/image/payupi.png'
import { Link } from 'react-router'
import UPIPayment from './Upipayment'
import CreditCardPayment from './creditpayment'
import NetBankingPayment from './netbankingpayment'
import EMIPayment from './Emipayment'
import CODPayment from './CODPayment'
import { loadStripe } from "@stripe/stripe-js"
import { CartState } from "../../context/Context.jsx";
import BASE_URL from '../../Config/config.js'
import axios from 'axios'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom';



const Paymentoption = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({})
  const { state, dispatch } = CartState();
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const savedAddress = JSON.parse(localStorage.getItem("selectedAddress"))
    if (savedAddress) {
      setSelectedAddress(savedAddress)
    }
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("checkoutFormDataArray"))
    if (storedData && storedData.length > 0) {
      setFormData(storedData[storedData.length - 1])  //get recent one
    }
  }, [])



  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51RD7BhFVJDXAcY8e0pNGhcMSa6KP7sW5NOgawOPZc0nwMAhs8SmK0S5gfsB2l5lJnPD41lz0zGGq7DLwuy9xNEYL00iuOPAteM"
    );
    if (!stripe) {
      console.error("Stripe failed to initialize");
      return;
    }

    const cartItems = state.cart;
    console.log("cart product via checkout", cartItems);
    if (!cartItems || cartItems.length === 0) {
      console.warn("Cart is empty");
    }

    const response = await fetch(`${BASE_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: cartItems,
        email: formData.email,
        formData,
      }),
    });

    const session = await response.json();
    if (!response.ok) {
      console.error(
        "Payment session creation failed",
        session.message || session
      );
    }
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log("Stripe checkout error", result.error.message);
    }
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token")
    if (!token) return;
    const decoded = JSON.parse(atob(token.split('.')[1])); //Decodes Base64 → converts it into a readable JSON string.
    if (!selectedOption) {
      toast.warning("Please select a payment method");
      return;
    }
    if (!selectedAddress) {
      toast.warning("Please select or add an address before placing order")
      return;
    }
    const userEmail = decoded.email;
    const totalAmount = state.cart.reduce((acc, item) => acc + parseFloat(item.new_price) * item.quantity, 0)
    const payload = {
      userEmail: decoded.email,
      name: selectedAddress.name,
      address: `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.zip}`,
      phone: selectedAddress.phone,
      cartItems: state.cart.map((item) => ({
        ...item,
        subcategory: item.subcategory 
      })),
      amount_Total: totalAmount,
      paymentMethod: selectedOption,
    }
    if (selectedOption === "cod") {
      // cod logic
      try {
        const response = await fetch(`${BASE_URL}/api/place-order`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (response.ok) {
          // clear cart after order
          dispatch({ type: "CLEAR_CART" })
          localStorage.removeItem("cart")
          toast.success("Order placed successfully (COD)!")
          navigate("/success")
        } else {
          toast.error("Failed to place order")
        }
      } catch (error) {
        console.error("Order failed")
      }
    } else {
      makePayment();  //this already use stripe
    }
  }


  return (
    <div className='paymntoptionmindiv'>
      <div className='w-full mb-3' style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <label htmlFor="" className='accondetallabel'><h3 className='payhed'>Payment Option</h3></label>
      </div>
      <div className='' style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <input className='radioput' style={{ marginTop: '15px' }} type='radio' name='payment' value='upi' checked={selectedOption === 'upi'} onChange={() => setSelectedOption('upi')} />
        <div className='' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="" className='accondetallabel otherupilbble'>UPI</label>
            <span style={{ color: '#828282', fontFamily: '"Poppins", sans-serif;', fontWeight: 400, fontSize: '16px', lineHeight: '150%', letterSpacing: '0' }}>Pay by any UPI app</span>
          </div>
        </div>
      </div>
      <hr style={{ borderRadius: '1px solid gray', margin: '0', padding: '0', width: '100%' }} />
      {/* credit card */}
      <div className='' style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <input className='radioput' style={{ marginTop: '15px' }} type='radio' name='payment' value='card' checked={selectedOption === 'card'} onChange={() => setSelectedOption('card')} />
        <div className='' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="" className='accondetallabel otherupilbble'>Credit/ Debit/ ATM Card</label>
            <span style={{ color: '#828282', fontFamily: '"Poppins", sans-serif;', fontWeight: 400, fontSize: '16px', lineHeight: '150%', letterSpacing: '0' }}>Add and secure cards as per RBI guidelines</span>
          </div>
        </div>
      </div>
      <hr style={{ borderRadius: '1px solid gray', margin: '0', padding: '0', width: '100%' }} />
      {/* net banking */}
      <div className='' style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <input className='radioput' style={{ marginTop: '15px' }} type='radio'
          name='payment'
          value='netbank'
          checked={selectedOption === 'netbank'}
          onChange={() => setSelectedOption('netbank')}
        />
        <div className='' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="" className='accondetallabel otherupilbble'>Net Banking</label>
            <span style={{ color: '#828282', fontFamily: '"Poppins", sans-serif;', fontWeight: 400, fontSize: '16px', lineHeight: '150%', letterSpacing: '0' }}>This Instrument has low success, use UPI or cards for better experience.</span>
          </div>
        </div>
      </div>
      <hr style={{ borderRadius: '1px solid gray', margin: '0', padding: '0', width: '100%' }} />
      {/* EMI */}
      <div className='' style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <input className='radioput' type='radio' name='payment'
          value='emi'
          checked={selectedOption === 'emi'}
          onChange={() => setSelectedOption('emi')} />
        <div className='' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="" className='accondetallabel otherupilbble'>EMI ( Easy Installments )</label>
        </div>
      </div>
      <hr style={{ borderRadius: '1px solid gray', margin: '0', padding: '0', width: '100%' }} />
      {/* cash on delivery */}
      <div className='' style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <input className='radioput' type='radio' name='payment'
          value='cod'
          checked={selectedOption === 'cod'}
          onChange={() => setSelectedOption('cod')} />
        <div className='' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="" className='accondetallabel otherupilbble'>Cash On Delivery ( COD )</label>
        </div>
      </div>
      <hr style={{ borderRadius: '1px solid gray', margin: '0', padding: '0', width: '100%' }} />
      {/* section Render Based on Selection */}
      <div className="" style={{ marginTop: '30px' }}>
        {selectedOption === 'upi' && <UPIPayment selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}
        {selectedOption === 'card' && <CreditCardPayment />}
        {selectedOption === 'netbank' && <NetBankingPayment />}
        {selectedOption === 'emi' && <EMIPayment />}
        {selectedOption === 'cod' && <CODPayment />}
      </div>
      <div className='confirmdiv' style={{ marginTop: '40px', right: 0 }}>
        <button onClick={handlePlaceOrder} type='submit' className='confirmbtn'>Confirm & Continue your Order</button>
      </div>
    </div>
  )
}

export default Paymentoption

