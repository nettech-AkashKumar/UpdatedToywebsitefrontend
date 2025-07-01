import React from 'react'
import PageLayout from '../../layouts/PageLayout';
import PriceSummarycart from '../../components/CartComponent/PriceSummarycart';
import Paymentoption from '../../components/Paymentoption/Paymentoption';

const PaymentOption = () => {
  return (
    <div>
      <PageLayout>
        <div className="payment-container d-flex my-12 gap-5">
            <Paymentoption/>
            <PriceSummarycart/>
        </div>
      </PageLayout>
    </div>
  )
}

export default PaymentOption;
