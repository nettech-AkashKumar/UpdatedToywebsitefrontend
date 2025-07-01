import React from 'react'
import './Knockoutoffer.css'
import MobileDisplay from '../../../assets/image/phome.png'
import shopinity from '../../../assets/image/shopinitylogo.png'
import Gpay from '../../../assets/image/gpay.png'
import Apstore from '../../../assets/image/apstore.png'




const Knockoutoffer = () => {
  return (
    <div className='knockoutmaindiv'>
      <div className='leftrightknockoutdiv'>
      <div className="leftsideknockout">
       <div className='mobiledisplaydiv'>
        <img className='mobiledisplayimg' src={MobileDisplay} alt="handsmobile" />
       </div>
      </div>
      <div className="rightsideknockout">
       <div className="knockoutonlyondiv">
        <p className='morewaiting'>more knockout offers waiting!</p>
        <div className='onlyonshopinityappdiv'> 
         <span className='onlyon'>Only On The</span>
         <span className='shopi'><img src={shopinity} alt="shopinity" /></span>
         <span className='ap'>App</span>
        </div>
       </div>
       <div className="googlepaycarddiv">
       <span className='download'>Download Now</span>
       <div className='googlepaydiv'>
       <span className='googlepay'><img src={Gpay} alt="gpay" /></span>
       <span className='apstore'><img src={Apstore} alt="apstore" /></span>
       </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Knockoutoffer
