import React from 'react';
import './Delete_Product_Model.css'

const Edit_Product_Model = ({onCancel, onDelete}) => {
  return (
    <div>
       <div className='delete-modal-container'>
       <div className='delete-modal'>
        <div className='delete-modal-box'> 
           <div className=''>
            <p className=''>Are you sure you want to delete this product?</p>
             <div className='d-flex align-items-center justify-content-center gap-5'>
              <button onClick={onCancel} style={{border:"1px solid #FF8272",color:"#FF8272", padding:"4px 20px"}}>Cancel</button>
              <button style={{backgroundColor:"#FF8272", padding:"4px 20px", color:"white"}} onClick={onDelete} >Delete</button>
             </div>
            
             
           </div>

         </div>
       </div>
       </div>
    </div>
  );
}

export default Edit_Product_Model;
