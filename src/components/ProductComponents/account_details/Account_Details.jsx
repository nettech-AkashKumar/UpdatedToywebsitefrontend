import React from 'react';
import PageLayout from '../../../layouts/PageLayout';
import Heroscetion_Userprofile from '../herosection_userprofile/Herosection_Userprofile';
import Sidebar_userprofile from '../../../components/sidebar_userprofile/Sidebar_userprofile'
import Account_DetailsComp from './Account_DetailsComp';
import './Account_Details.css'

const Account_Details = () => {
  return (
    <div>
      <PageLayout>
        <div>
            <Heroscetion_Userprofile  heading="Your Profile "
            subheading=" Account Details"/>  
            <div className='account-details' style={{display:"flex", gap:"40px"}}>
               <Sidebar_userprofile/>
                <div className='account-details-container w-100'>
                    <Account_DetailsComp />
                </div>
            </div>
        </div>
      </PageLayout>
    </div>
  );
}

export default Account_Details;
