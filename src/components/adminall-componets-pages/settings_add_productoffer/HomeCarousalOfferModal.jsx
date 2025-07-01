import React, {useState, useRef} from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../Config/config.js";
import "./HomeCarousalOfferModal.css"

const HomeCarousalOfferModal = ({isopen, setIsOpen}) => {
  const [formData, setFormData]= useState({category:'',image:null, link:''})
   
    const fileInputRef = useRef(null)

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
    // const handleSubmit = async(e) => {
    //     e.preventDefault();

    //     const file = fileInputRef.current.files[0]
    //     if(!file) {
    //         toast.error("Please select an image file")
    //         return;
    //     }
    //     const newFormData  = new FormData()
    //     newFormData.append('category',formData.category)
    //      if (newFormData.imageUrl) {
    //             formData.append("image", file)
    //         }
    //     try {
    //      const res = await axios.post(`${BASE_URL}/api/offers/post`, formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //      })
    //      if(res.data.success) {
    //         toast.success('Carousal offer added successfully', {
    //             position:'top-center', autoClose: 3000
    //         })
    //         setIsOpen(false)
    //      }
    //     }catch(error) {
    //      toast.error("Failed to added Carousal offer", {
    //         position:'top-center', autoClose: 3000
    //      })
    //     }
    // }


    const handleSubmit = async (e) => {
  e.preventDefault();

  const file = fileInputRef.current.files[0];
  if (!file) {
    toast.error("Please select an image file");
    return;
  }

  const newFormData = new FormData();
  newFormData.append("category", formData.category); // ✅ correct state access
  newFormData.append("image", file); // ✅ always append image if file exists
  newFormData.append("link", formData.link);

  try {
    const res = await axios.post(`${BASE_URL}/api/offers/post`, newFormData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    if (res.data.success) {
      toast.success('Carousel offer added successfully', {
        position: 'top-center',
        autoClose: 3000
      });
      setIsOpen(false);
    }
  } catch (error) {
    toast.error("Failed to add Carousel offer", {
      position: 'top-center',
      autoClose: 3000
    });
  }
};

    if(!isopen) return null
  return (
    <div>
        <div className="carousal-modal-overlay">
            <div className="carousal-modal-content">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="add-product-offer-conatner my-3 mx-3 py-3 px-3">
                <div className="text-center">
                  <h1
                    style={{
                      fontSize: "25px",
                      fontFamily: '"Poppins", sans-serif',
                      color: "#3D3D3D",
                    }}
                  >
                    Add New Product Offer
                  </h1>
                </div> 
                 <div className="pt-2">
                  <input
                    className="addoffer-category"
                    name="category"
                    type="text"
                    placeholder='Add Category'
                    onChange={handleChange}
                    style={{
                      border: "1px solid grey",
                      width: "100%",
                      padding: "8px",
                      
                    }}
                  />
                </div>
                <div className="py-2">
                  <input
                    className="add-offer-input-file"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    ref={fileInputRef}
                    style={{
                      border: "1px solid grey",
                      width: "100%",
                      padding: "8px",
                    }}
                  />
                </div>
                 <div className="py-2">
                  <input
                    className="add-offer-input-file"
                    type="url"
                     name='link'
                     placeholder='Type banner link'
                    onChange={handleChange}
                     style={{
                      border: "1px solid grey",
                      width: "100%",
                      padding: "8px",
                    }}
                  />
                </div>
                <div className="text-center add-offer">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#FF8272",
                      color: "white",
                      padding: "10px 15px",
                      borderRadius: "4px",
                    }}
                  >
                    Add Offer
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    style={{
                      marginLeft: "10px",
                      padding: "10px 15px",
                      backgroundColor: "#ccc",
                      borderRadius: "4px",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default HomeCarousalOfferModal
