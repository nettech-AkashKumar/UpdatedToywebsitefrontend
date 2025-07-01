import React, {useState, useEffect} from 'react'
import '../../pages/Cart/Cart.css';

import { CartState } from '../../context/Context'


const PriceSummarycart = () => {
  const {state, dispatch} = CartState();

   const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState()
  
    useEffect(() => {
      const calculatedSubTotal = state.cart.reduce((acc, curr) => acc + Number(curr.new_price) * curr.quantity, 0);
      const discount = 100;
      const packagingFee = 118;
      const finalTotal = calculatedSubTotal - discount + packagingFee;
  
      setSubTotal(calculatedSubTotal)
      setTotal(finalTotal)
    }, [state.cart]);
  return (
    <div>
       <div className="filtersdive">
              <div className="filters-summary">
                <p className="pricedetails">PRICE DETAILS <span style={{fontWeight:400, fontSize:'14px', lineHeight:'150%'}}>({state.cart.length})Item</span></p>
                <div className="flexitems">
                  <p className="title">Total MRP</p>
                  <p className="total">₹{subTotal}</p>
                </div>
                <div className="flexitems">
                  <p className="discount">Discount</p>
                  <p className="totaldiscount">- ₹100</p>
                </div>
                <div className="flexitems">
                  <p className="delivery">Delivery Charges</p>
                  <p className="deliverycharges">
                    <del style={{ color: "#bfbfbf" }}>-₹80</del> Free
                  </p>
                </div>
                <div className="flexitems">
                  <p className="secured">Secured Packaging Fee</p>
                  <p className="securedfee">₹118</p>
                </div>
                <hr style={{height:'1px', color:'#D9D9D9'}}/>
                <div className="flexitems">
                  <p className="totalamount">Total Amount</p>
                  <p className="totalamountmoney">₹{total}</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default PriceSummarycart
