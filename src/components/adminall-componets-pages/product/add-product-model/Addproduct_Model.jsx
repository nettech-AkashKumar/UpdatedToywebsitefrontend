import React, { useEffect, useState } from "react";
import "./Addproduct_Model.css";
import Button from "@mui/material/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import BASE_URL from "../../../../Config/config.js";
import axios from "axios";
import { MdClose } from "react-icons/md";
import ImageGallery from "../../../CrudImageGallery/ImageGallery.jsx";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproduct_Model = ({
  onClose,
  headline,
  handleSubmit,
  handleOnChange,
  rest,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [secondisOpen, setSecondIsOpen] = useState(true);
  const [thirdisOpen, setThirdIsOpen] = useState(true);
  const [fourisOpen, setFourIsOpen] = useState(true);

  const handleDeleteImage = async (productId, imageId) => {
    console.log("productId, imageId", productId, imageId);
    if (window.confirm("Are you sure you want to delete this image?")) {
      try {
        await axios.delete(`${BASE_URL}/delete-image/${productId}/${imageId}`);
        alert("Image deleted successfully");
      } catch (error) {
        console.log("Error deleting image:", error);
      }
    }
  };
  const [dataList, setDataList] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get(`${BASE_URL}/api/products`);
    console.log("fetchdata", data);
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const [enableCategory, setEnableCategory] = useState(false);
  useEffect(() => {
    if (rest?.category === "kids") {
      setEnableCategory(true);
    } else {
      setEnableCategory(false);
    }
  }, [rest?.category]);

  const [enableelectroniccategory, setElectronicCategory] = useState(false)
  useEffect(() => {
    if(rest?.category === "electronics") {
      setElectronicCategory(true)
    }else {
      setElectronicCategory(false)
    }
  })

  return (
    <div className="add-product-modal-overlay">
      <div className="add-product-modal-box" style={{ position: "relative" }}>
        <div className="modal-header">
          <h1 style={{ fontSize: "20px" }}>{headline}</h1>
          <button onClick={onClose} className="close-btn">
            <MdClose />
          </button>
        </div>
        <form
          className="add-product-form"
          action="/create"
          method="post"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="text-center">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <label
                htmlFor=""
                className="pt-4 pb-3 fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Product Information
              </label>
              <RiArrowDropDownLine
                className="fs-4"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </div>

            {isOpen && (
              <>
                <div className="title-subtile-input">
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="title"
                    value={rest?.title}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />

                  <TextField
                    label="SubTitle"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="subtitle"
                    value={rest?.subtitle}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                <div className="category-type-box">
                  {/* <TextField
                    select
                    id="category"
                    label="Category"
                    name="category"
                    variant="outlined"
                    onChange={handleOnChange}
                    required
                    value={rest?.category}
                    type="text"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  >
                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <MenuItem sx={{position:'absolute',color:'black', backgroundColor: '#f0f0f0'}} key={cat._id} value={cat.category}>
                          {cat.category}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No Categories Available</MenuItem>
                    )}
                  </TextField> */}
                  {/* for target */}
                  {/* <TextField
                    select
                    id="target"
                    label="Target"
                    name="target"
                    variant="outlined"
                    onChange={handleOnChange}
                     onBlur={(e) => e.target.blur()}
                    required
                    value={rest?.target}
                    type="text"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  >
                    {targets.length > 0 ? (
                      targets.map((tar) => (
                          <MenuItem sx={{position:'absolute', color:'black', backgroundColor: '#f0f0f0'}} key={tar._id} value={tar.target}>
                            {tar.target}
                          </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No Target Available</MenuItem>
                    )}
                  </TextField> */}
                </div>
                {/* category & subcategory */}
                <div className="title-subtile-input">
                  <TextField
                    label="Category"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="category"
                    value={rest?.category}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />

                  <TextField
                    label="SubCategory"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="subcategory"
                    value={rest?.subcategory}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>

                {/* brand and discount */}
                <div className="title-subtile-input">
                  <TextField
                    label="Brand"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="brand"
                    value={rest?.brand}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />

                  <TextField
                    label="Discount Range"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="discount"
                    value={rest?.discount}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                {/* brand and discount end */}

                <div className="title-subtile-input">
                  {enableCategory && (
                    <>
                      <TextField
                        label="Gender"
                        variant="outlined"
                        fullWidth
                        type="text"
                        id="gender"
                        name="gender"
                        value={rest?.gender}
                        onChange={handleOnChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "#ff8272",
                            },
                          },
                        }}
                      />
                    </>
                  )}
                  <TextField
                    label="Type"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="type"
                    id="type"
                    value={rest?.type}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                   <TextField
                    label="HSN"
                    variant="outlined"
                    fullWidth
                    type="number"
                    name="hsn"
                    value={rest?.hsn}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& input[type=number]": {
                        MozAppearance: "textfield",
                      },
                      "& input[type=number]::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                 {/*bluetooth, battery operated,  */}
                  {enableelectroniccategory && (
                   <>
                 <div className="title-subtile-input">
                  <TextField
                    label="Bluetooth"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="bluetooth"
                    value={rest?.bluetooth}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />

                  <TextField
                    label="Battery Life"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="batteryoperated"
                    value={rest?.batteryoperated}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                {/* weight and warranty */}
                <div className="title-subtile-input">
                  <TextField
                    label="Weight"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="weight"
                    value={rest?.weight}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />

                  <TextField
                    label="Warranty"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="warranty"
                    value={rest?.warranty}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                   </>
                  )}

                {/* description */}
                <div className="textare-descritpion-box">
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="description"
                    value={rest?.description}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                {/* bluetooth, batteryoperated, weight, warranty  */}
              </>
            )}
          </div>
          <div className="text-center">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <label
                htmlFor=""
                className="pt-4 pb-3 fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Pricing
              </label>
              <RiArrowDropDownLine
                className="fs-4"
                onClick={() => setSecondIsOpen((prev) => !prev)}
              />
            </div>
            {secondisOpen && (
              <>
                <div className="title-subtile-input">
                  <TextField
                    label="Old Price"
                    variant="outlined"
                    fullWidth
                    type="number"
                    id="old_price"
                    name="old_price"
                    value={rest?.old_price}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& input[type=number]": {
                        MozAppearance: "textfield",
                      },
                      "& input[type=number]::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                  <TextField
                    label="New Price"
                    variant="outlined"
                    fullWidth
                    type="number"
                    id="new_price"
                    name="new_price"
                    value={rest?.new_price}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& input[type=number]": {
                        MozAppearance: "textfield",
                      },
                      "& input[type=number]::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                <div className="title-subtile-input">
                  <TextField
                    label="Return Policy"
                    variant="outlined"
                    fullWidth
                    type="text"
                    id="returnpolicy"
                    name="returnpolicy"
                    value={rest?.returnpolicy}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                  <TextField
                    label="SKU"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="sku"
                    id="sku"
                    value={rest?.sku}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className="text-center">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <label
                htmlFor=""
                className="pt-4 pb-3 fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Inventory
              </label>
              <RiArrowDropDownLine
                className="fs-4"
                onClick={() => setThirdIsOpen((prev) => !prev)}
              />
            </div>
            {thirdisOpen && (
              <>
                <div className="title-subtile-input">
                  <TextField
                    label="Stock"
                    fullWidth
                    variant="outlined"
                    type="number"
                    id="stock"
                    name="stock"
                    value={rest?.stock}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& input[type=number]": {
                        MozAppearance: "textfield",
                      },
                      "& input[type=number]::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                  <TextField
                    label="Product Code"
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="productcode"
                    id="productcode"
                    value={rest?.productcode}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
                <div className="title-subtile-input color-box">
                  {/* <TextField
                    variant="outlined"
                    fullWidth
                    label="Weight"
                    type="text"
                    name="weight"
                    value={rest?.weight}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  /> */}
                  <TextField
                    label="Size"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="size"
                    value={rest?.size}
                    onChange={handleOnChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                  <TextField
                    label="Color"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="color"
                    id="color"
                    value={rest?.color}
                    onChange={handleOnChange}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                      },
                    }}
                  />
                </div>
              </>
            )}
          </div>

          <div className="text-center pb-3">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <label
                htmlFor=""
                className="pt-4 pb-3 fs-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Attributes
              </label>
              <RiArrowDropDownLine
                className="fs-4"
                onClick={() => setFourIsOpen((prev) => !prev)}
              />
            </div>
            {fourisOpen && (
              <div className="title-subtile-input">
                <TextField
                  label="Keyfeatures"
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="keyfeatures"
                  id="keyfeatures"
                  value={rest?.keyfeatures}
                  onChange={handleOnChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": { borderColor: "#ff8272" },
                    },
                  }}
                />
              </div>
            )}
          </div>

          <div className="text-center pb-3">
            <ImageGallery
              images={rest?.image}
              id={rest?._id}
              handleDeleteImg={handleDeleteImage}
            />
            <input
              type="file"
              name="image"
              label="Image "
              multiple
              onChange={handleOnChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input">
              <Button
                style={{ backgroundColor: "#FF8272", color: "white" }}
                variant="contained"
                component="span"
                type="submit"
              >
                Upload Images
              </Button>
            </label>
          </div>

          <div>
            <button
              className="w-100 add-product-model-submitbtn"
              type="submit"
              style={{
                backgroundColor: "#FF8272",
                color: "white",
                padding: "6px 9px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct_Model;
