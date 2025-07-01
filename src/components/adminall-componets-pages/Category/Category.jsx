import React, { useEffect, useState } from "react";
import BASE_URL from "../../../Config/config.js";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Category.css";
import { MdDelete } from "react-icons/md";

const Category = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [target, setTarget] = useState("");
  const [targets, setTargets] = useState([]);

  // load categories from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(stored);
  }, []);

  useEffect(() => {
    const storedTarget = JSON.parse(localStorage.getItem("targets")) || [];
    setTargets(storedTarget);
  }, []);

  // get categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/categories/all`);
      setCategories(res.data.categories);
    } catch (error) {
      toast.error("Failed to fetch categories", error);
    }
  };

  const fetchTargets = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/target/all`);
      setTargets(res.data.targets);
    } catch (error) {
      toast.error("Failed to fetch target", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTargets();
  }, []);

  // submit form handler
  const handleSubmit = async () => {
    const trimmedCategory = category.trim();
    const trimmedTarget = target.trim();
    try {
      if (trimmedCategory) {
        const resCat = await axios.post(`${BASE_URL}/api/categories/add`, {
          category: trimmedCategory,
        });
        setCategories((prev) =>
          Array.isArray(prev)
            ? [...prev, resCat.data.category]
            : [resCat.data.category]
        );
        setCategory("");
      }
      if (trimmedTarget) {
        const resTar = await axios.post(`${BASE_URL}/api/target/add`, {
          target: trimmedTarget,
        });
        setTargets((prev) =>
          Array.isArray(prev)
            ? [...prev, resTar.data.target]
            : [resTar.data.target]
        );
        setTarget("");
      }
      fetchCategories();
      fetchTargets();
    } catch (error) {
      toast.error("Failed to add", error);
    }
  };
  // delete Category
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      toast.error("Failed to delete Category", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // delete Target
  const handleDeleteTarget = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/target/${id}`);
      fetchTargets();
    } catch (error) {
      toast.error("Failed to delete Target", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <div className="p-4 max-w-3xl mx-auto" style={{ maxWidth: "1400px" }}>
        {/* Single combined form */}
        <div className="bg-white p-4 shadow-md rounded mb-6">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "24px",
              letterSpacing: "0",
              color: "#3D3D3D",
            }}
          >
            Add Category or Target
          </h2>
          <div className="d-flex flex-column">
            <label className="block mb-2 font-medium">Category(Optional)</label>
            <input
              type="text"
              placeholder="Product Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            />

            <label className="block mb-2 font-medium">Target(Optional)</label>
            <input
              type="text"
              placeholder="Product Target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-4"
            />
            <button
              onClick={handleSubmit}
              className="w-full text-white px-4 py-2 rounded"
              style={{ backgroundColor: "#FF8272" }}
            >
              Actions
            </button>
          </div>
        </div>
        
        {/* categories list */}
        <div className="d-flex" style={{gap:'30px', marginTop:'20px'}}>
            <div className="p-4 rounded shadow mb-6" style={{width:'400px', backgroundColor:'white'}}>
           <h3 className="text-xl font-medium mb-2">Available Categories</h3>
           <div className="gap-2" style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {categories.length > 0 ? (
            categories.map((cat) => (
                <div key={cat._id} className="gap-2 border p-2 rounded" style={{display:'flex', justifyContent:'space-between', gap:'20px', marginBottom:'10px'}}>
                    <span>{cat?.category}</span>
                    <button className="" style={{color:'#ffa085', backgroundColor:'transparent'}} onClick={() => handleDeleteCategory(cat._id)}><MdDelete/></button>
                </div>
            )) 
            
           ) : (<p className="text-gray-500">No Categories added yet</p>) }
           </div>
            </div>
        {/* target list */}
            <div className="p-4 rounded shadow mb-6" style={{width:'400px', backgroundColor:'white'}}>
                <h3 className="text-xl font-medium  mb-2">Available Targets</h3>
                <div className=" gap-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)'}}>
                    {targets.length > 0 ? (
                        targets.map((tar) => (
                        <div key={tar._id} className="gap-2 border p-2 rounded" style={{display:'flex', justifyContent:'space-between', gap:'20px', marginBottom:'10px'}}>
                            <span>{tar?.target}</span>
                            <button className="" style={{color:'#ffa085', backgroundColor:'transparent'}} onClick={() => handleDeleteTarget(tar._id)}><MdDelete/></button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No Target added yet</p>
                )
            }
            </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Category;





