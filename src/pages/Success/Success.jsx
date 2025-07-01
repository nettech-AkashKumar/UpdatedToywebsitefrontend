import React, { useEffect, useState } from 'react'
import './Success.css'
import PageLayout from '../../layouts/PageLayout'
import success from '../../assets/image/success.png'
import axios from 'axios';
import BASE_URL from '../../Config/config.js'
import { useParams } from 'react-router';

const Success = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState([]);

  // useEffect(() => {
  //   const fetchEstimateDate = async () => {
  //     try {
  //       const res = await axios.get(`${BASE_URL}/api/order-details/${orderId}`)
  //       setOrder(res.data.order)
  //       console.log('order success', res.data.order)
  //     } catch (error) {
  //       setOrder(null)
  //     }
  //   };
  //   fetchEstimateDate();
  // }, [orderId]);

  return (
    <div>
      <PageLayout>
        <div className='successdiv'>
          {/* {order?.tracking?.estimatedDate && ( */}
          <div className='' style={{ display: 'flex', flexDirection: 'column' }}>
            <p className='thankunote' style={{ marginBottom: '10px' }}>Thank You for Shopping with us!</p>
            <p className='delivdate' style={{ marginBottom: '10px' }}>Your Order has been delivered Soon!!</p>
          </div>
          {/* )} */}
          <div className='successimgdiv'>
            <img className='successimg' src={success} alt="successimg" />
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Success
