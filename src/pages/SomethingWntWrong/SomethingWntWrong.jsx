import React from 'react'
import './SomethingWntWrong.css'
import PageLayout from '../../layouts/PageLayout'
import Warning from '../../assets/image/Warning.png'
import { Link } from 'react-router'

const SomethingWntWrong = () => {
  return (
    <div>
      <PageLayout>
        <div className='somethingmaindiv'> 
          <div className='somethingwrongcontentdiv'>
             <p className='warningimg'><img src={Warning} alt="warning" /></p>
             <p className='wentwrng'>Something went wrong</p>
             <p className='refreshloaddesc'>We had some trouble loading this page. Please refresh the page to try again or get in touch if the problem come again!</p>
             <div className='contactrefreshbtndiv'>
                <button className='contactfdivbtn'>Contact support</button>
                <Link to='/'><button className='freshdivbtn'>Refresh page</button></Link>
             </div>
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default SomethingWntWrong
