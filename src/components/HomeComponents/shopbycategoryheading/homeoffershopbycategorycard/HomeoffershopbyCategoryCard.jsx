import React, { useState } from 'react';
import "./HomeoffershopbyCategoryCard.css"
import Logo from "../../../../assets/image/website-logo.png"
import BASE_URL from '../../../../Config/config.js';
import axios from 'axios'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const HomeoffershopbyCategoryCard = ({ show, onClose }) => {
    if (!show) return null;
    const [formData, setFormData] = useState({ title: "", imageUrl: null, discount: "", category:"", link: "" })

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0]
            }))
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const categoryFormData = new FormData();
            categoryFormData.append("title", formData.title)
            categoryFormData.append("discount", formData.discount)
            categoryFormData.append("category", formData.category)
            categoryFormData.append("link", formData.link)
            if (formData.imageUrl) {
                categoryFormData.append("imageUrl", formData.imageUrl)
            }
            const shpdata = await axios.post(`${BASE_URL}/api/homecards/post`,
                categoryFormData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            );
            console.log("Server response", shpdata.data)
            if (shpdata.data.success) {
                toast.success("Form data saved successfully", {
                    position: 'top-center',
                    autoClose: 3000
                })
                onClose();
            }
        } catch (error) {
            toast.error("FAiled to submit form", {
                position: 'top-center',
                autoClose: 3000
            })
        }
    }

    return (
        <div className='homeoffer-modal-overlay'>
            <div className="homeoffer-modal-content">
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="homeoffer-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <h2 className="homeoffer-title">Shop By Category Offer</h2>
                </div>
                <form onSubmit={handleSubmit} className='homeoffer-form'>
                    <label htmlFor="" className="homeoffer-label">Card Title</label>
                    <input type="text" name='title' value={formData.title} onChange={handleChange} placeholder='Enter Card Title' className="homeoffer-input" />

                    <label htmlFor="" className="homeoffer-label">Card Image</label>
                    <input type="file" name='imageUrl' onChange={handleChange} placeholder='' className="homeoffer-input" />

                    <label htmlFor="" className="homeoffer-label">Discount Percentage</label>
                    <input type="text" name='discount' value={formData.discount} onChange={handleChange} placeholder='%' className="homeoffer-input" />

                     <label htmlFor="" className="homeoffer-label">Category</label>
                    <input type="text" name='category' value={formData.category} onChange={handleChange} placeholder='Add Category' className="homeoffer-input" />

                    <label htmlFor="" className="homeoffer-label">Shop Now Link</label>
                    <input type="url" name='link' value={formData.link} onChange={handleChange} placeholder='Type your product link' className="homeoffer-input" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                        <button type='submit' className='homeoffer-submit'>Add Offer</button>
                        <button type='submit' onClick={onClose} className='homeoffer-submit'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HomeoffershopbyCategoryCard;
