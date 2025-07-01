import React from 'react'
import './ElevateSection.css'
import Firstlady from '../../../assets/image/firstlady.png'
import { Link } from 'react-router'
const ElevateSection = () => {
  return (
    <div className='firstContainer'>
      <div className="leftside">
        <div className='threeleftpara'>
        <p className='fifitypercentoff'>50% OFF festive super sale</p>
        <p className='elevateme'>Elevate your shopping Experience today</p>
        <p className='timeless'>Timeless styles, Limited-Time Prices</p>
        <div className='mt-5 elevate-shopbtn '> 
        <button className='firstleftshopbtn'><span className='shopbtntxt'>Shop Now</span></button>
        </div>
        </div>
      </div>
      <div className="rightside">
        <div className='rightimagediv'>
            <img src={Firstlady} alt="firstlady" />
            </div>
      </div>
    </div>
  )
}

export default ElevateSection
