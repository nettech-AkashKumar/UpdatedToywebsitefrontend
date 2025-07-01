import React, {useEffect, useState} from "react";
import "./Product.css";
import { IoMdSearch } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Addproduct_Model from "./add-product-model/Addproduct_Model";
import Delete_Product_Model from "../../../components/adminall-componets-pages/product/delete_product_model/Delete_Product_Model"
import { toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../Config/config.js"
import axios from "axios";




const Product = () => {


const [showModal, setShowModal] = useState(false);
const [secondshowModal, setSecondShowModal] = useState(false);
const [deleteshowModal, setDeleteShowModal] = useState(false);
const [selectedItemId, setSelectedItemId] = useState(null)  //for delete product modal
// search state
const [searchTerm, setSearchTerm] = useState("")


  const handleOpenModal = () => {
    setShowModal(true)
  }
    const handleCloseModal = () => {
    setShowModal(false);
    }
  const handleOpenSecondModal = () => {
  setSecondShowModal(true); 
};
  const handleCloseSecondModal = () => {
  setSecondShowModal(false); 
};


    const [formData, setFormData] = useState({
  title:"",
  subtitle:"",
  gender:"",
  old_price: "",
    new_price: "",
    category: "",
    stock: "",
    type: "",
    primarymaterial: "",
    safetycompliance: "",
    durability: "",
    description: "",
    dimension: "",
    weight: "",
    warranty:"",
    returnpolicy: "",
    removableparts: "",
    assemblyrequired: "",
    cleaning: "",
    bluetooth: "",
    batteryoperated: "",
    contentinside: "",
    numberofcomponents: "",
    netqty: "",
    sku: "",
    color: "",
    target: "",
    keyfeatures: "",
    brand:"",
    discount:"",
    size:"",
    image: "",
    hsn:"",
});
// edit form Data
const [formDataEdit, setFormDataEdit] = useState({
  title:"",
  subtitle:"",
    gender: "",
    old_price: "",
    new_price: "",
    category: "",
    stock: "",
    type: "",
    primarymaterial: "",
    safetycompliance: "",
    durability: "",
    description: "",
    dimension: "",
    weight: "",
    returnpolicy: "",
    removableparts: "",
    assemblyrequired: "",
    cleaning: "",
    electronics: "",
    batteryoperated: "",
    contentinside: "",
    numberofcomponents: "",
    netqty: "",
    sku: "",
    color: "",
    target: "",
     brand:"",
    discount:"",
    size:"",
    keyfeatures: "",
    image: "",
    _id: "",
    hsn:"",

})
const [dataList, setDataList] = useState([]);

// handle onChange
const handleOnChange = (e) => {
  const {name, value, type, files} = e.target;
  if(type === "file") {
    setFormData((preve) => ({
      ...preve,
      [name]: [...files],
    }));
  }else {
    setFormData((preve) => ({
      ...preve,
      [name]: value
    }))
  }
}

// handle submit
const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    const formDataToSend = new FormData(); 
    Object.keys(formData).forEach((key) => {
      if(key === "image" && Array.isArray(formData[key])) {
        formData[key].forEach((file) => {
          formDataToSend.append("image", file)
        })
      } else {
        formDataToSend.append(key, formData[key])
      }
    });
    const data = await axios.post(`${BASE_URL}/api/products/create`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("form data", data);
    if(data.data.success) {
      setShowModal(false);
      toast.success("Form save successfully!", {
        position:'top-center',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      getFetchData();
    }
  }catch(error) {
    toast.error("Failed to submit form", {
      position:'top-center',
      autoClose:1000,
      hideProgressBar: false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable: true
    })
  }
}

// get product data  
const getFetchData = async () => {
  const data = await axios.get(`${BASE_URL}/api/products`);
  console.log("fetchdata", data)
  if(data.data.success) {
    setDataList(data.data.data.reverse());
  }
}
useEffect(() => {
  getFetchData();
},[])
console.log("datalist", dataList);

// handle product delete
const handleDelete = async (id) => {
  try {
  const data = await axios.delete(`${BASE_URL}/api/products/delete/${id}`);
  if(data.data.success) {
    toast.success(data.data.message, {position:'top-center'})
    getFetchData();
  }
}catch(error) {
  toast.error("Failed to delete product", {position:'top-center'})
}
}

// handle product update
const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const formDataToSend = new FormData();
    Object.keys(formDataEdit).forEach((key) => {
      if(key === "image" && Array.isArray(formDataEdit[key])) {
        formDataEdit[key].forEach((file) => formDataToSend.append("image", file));
      }else {
        formDataToSend.append(key, formDataEdit[key]);
      }
    })
    const data = await axios.put(`${BASE_URL}/api/products/update/`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if(data.data.success) {
      getFetchData();
      // alert(data.data.message);
      toast.success("Product data updated successfully", {
        position:'top-center',
        autoClose:5000,
      })
      setSecondShowModal(false)
    }
  }catch(error) {
    toast.error("Failed to update product", {
      position:'top-center',
      autoClose:true
    })
  }
};
// onchange handle edit
const handleEditOnChange = async (e) => {
  const {name, value, type, files} = e.target;
  setFormDataEdit((preve) => {
    return {
      ...preve,
      [name]: type === "file" ? [...(preve.image || []), ...files] : value,
    };
  });
};

// handle edit product
const handleEdit = async (detail) => {
  console.log('deetaaill', detail)
  setFormDataEdit({
    ...detail,
    image: Array.isArray(detail.image) ? detail.image.map(img => img) : [`${BASE_URL}/${detail.image}`]
  });
  setSecondShowModal(true)
  console.log("detailsaq", detail);
}

// search function
const filteredProducts = dataList.filter((product) => (
product.title.toLowerCase().includes(searchTerm.toLowerCase())
))

  return (
    <div>
      <div
        className="product-container py-3 px-3 my-3 mx-3"
        style={{ backgroundColor: "white",}}
      >
        <div className="d-flex justify-content-end">
          <div className="product-headline">
            <h1 className="productlist-headline">Product List</h1>
            {showModal && 
            <Addproduct_Model
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            rest={formData}
            isEditing={false}
             onClose={handleCloseModal} headline="Add Product"/>}
            <button onClick={handleOpenModal} className="add-product-btn">+ Add Product</button>
                 
          </div>
        </div>
        <div className="search-box-product-section d-flex justify-content-end mt-5 mb-3">
          <div className="search-title-box-product">
            <IoMdSearch style={{ fontSize: "20px" }} />
            <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by title.." />
          </div>
        </div>
        <div className="product-table-container">
          <table>
            <thead>
              <tr className="table-header">
                <th>Product Title</th>
                <th>Product Brand</th>
                <th>Product Category</th>
                <th>Image</th>
                <th>Product Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
             <tbody>
             {filteredProducts.map((item,index)=>(
              <tr key={index} className="table-body">
                <td>{item?.title}</td>
                <td>{item?.brand}</td>
                <td>{item?.category}</td>
                <td>
                  <div
                    style={{
                      width: "100%",
                      height: "65px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={item.image?.[0]?.url ? `${BASE_URL}${item.image[0]?.url}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"}
                      alt="product_img"
                    />
                    {console.log('img', item.image?.[0]?.url ? `${BASE_URL}${item.image[0]?.url}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s")}
                  </div>
                </td>
                <td>{item.new_price}</td>
                <td>
                  <span
                    className={`${
                              item.status === "In Stock"
                                ? " bg-[#D7FBE5] text-[#116500]"
                                : item.status === "Out of Stock"
                                ? " bg-[#FFE8EC] text-[#CF0504]"
                                :""
                               
                            }`}
                     style={{padding:"5px 8px", borderRadius:"5px"}}
                   
                  >
                    {item?.stock}
                  </span>
                </td>
                <td> 
                  {/* for edit form section */}
                  {secondshowModal  && 
                  <Addproduct_Model 
                  handleSubmit={handleUpdate}
                  handleOnChange={handleEditOnChange}
                  isEditing={true}
                  rest={formDataEdit}
                  onClose={handleCloseSecondModal} headline="Edit Product"/>}
                     <button
                    className="btn btn-sm  me-2"
                    style={{ color: "#FF8272", fontSize: "22px" }}
                     onClick={() => {handleOpenSecondModal(); handleEdit(item)}}
                  >
                    
                    <FaEdit />
                     
                   
                  </button>
                  <button
                    className="btn btn-sm "
                    style={{ color: "red", fontSize:"22px" }}
                    onClick={() => {setSelectedItemId(item._id); setDeleteShowModal(true)}}
                  >
                    <MdDelete />
                  </button>
                 
                </td>
              </tr>
             ))}
            </tbody>
          </table>
           {deleteshowModal && <Delete_Product_Model onDelete={() => { handleDelete(selectedItemId); setDeleteShowModal(false)}}  onCancel={() => setDeleteShowModal(false)}/>}
        </div>
      </div>
    </div>
  );  
};

export default Product;
