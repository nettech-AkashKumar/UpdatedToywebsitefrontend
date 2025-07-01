import React from "react";
import "./faq.css";
import SubscribeImg  from "../../assets/image/onesubscribe.png";
import Accordian from "../../components/faqAccordion/Accordion";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
const Faq = () => {
  return (
    <>
   <PageLayout>
    <div className=" section-padding faq-section my-10">
    <div className="faq-hero-bg">
          
          </div>
      <div className="">
    
        <div className="">
        
       
           {/* faq top-section  */}
          <div className="faq-top-section ">
          
            <div className="Faq-top-detail">
              <h4 className="faq-detail-title">❓ FAQs</h4>
              <p className="faq-detail-para">
                Need help? Check out our frequently asked questions for instant answers.
              </p>
            </div>
          </div>
          <Accordian />
        
          </div>
          </div>
           {/* signup section */}
   <div className="signup-container py-10">
           <div className="news-signup">
                <div className='news-container'>
                  <div className="news-content">
                <h1 className='news-h1'>Sign up for our newsletter</h1>
               
               <p className='news-p'>  Be the first to know about latest toys and products releases.</p>
               <form className="faq-form-newsletter" action="">
                 <input type="text" placeholder="Enter your email"/>
                 <button className='faq-newsletter-subscribe-btn'>Subscribe</button>
                
               </form>
               <p className="p-des">We care about your data in our <u style={{color:'#FF8272'}}>
                <Link to="/Policy" className="policylink" style={{margin:"0",textDecoration:" none", color:'#FF8272',}} >privacy policy</Link></u ></p>
                </div >
                </div>
               
                <div className='pic-news'> 
                <img className="pic-news-image" src={SubscribeImg} alt="Subscribe" />
              
                </div>
              </div>
              </div>

              
        
      
     </div>
     </PageLayout>
     </>
    
  );
};

export default Faq;
