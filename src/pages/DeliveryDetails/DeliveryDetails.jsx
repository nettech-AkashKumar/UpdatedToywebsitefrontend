import React from 'react'
import PageLayout from '../../layouts/PageLayout'
import DeliveryDetails from '../../components/DeliveryDetails/DeliveryDetails'
import PriceSummarycart from '../../components/CartComponent/PriceSummarycart'
import './DeliveryDetails.css'

const DeliveryDetailspage = () => {
  return (
    <div>
      <PageLayout>
        <div className="deliverydetailscont gap-5 my-10 p-4" style={{display:'flex'}}>
        <DeliveryDetails/>
        <PriceSummarycart/>
        </div>
      </PageLayout>
    </div>
  )
}

export default DeliveryDetailspage
