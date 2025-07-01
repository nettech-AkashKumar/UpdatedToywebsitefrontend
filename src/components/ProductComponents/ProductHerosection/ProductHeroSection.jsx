import React, { useEffect, useState } from 'react'
import './ProductHeroSection.css'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FiChevronRight } from 'react-icons/fi'


const ProductHeroSection = ({ category, subcategory, productCount, filters, setFilters, sizeOptions}) => {


  // handle filter change
  const handleFilterChange = (e) => {
    const {name, value} = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.trim().toLowerCase(),
    }))
  }


  return (
    <div className='productheromainsection' style={{ backgroundColor: '' }}>
      <div className="homeclothingmen" style={{ backgroundColor: '' }}>
        <span style={{ color: '#717171', fontWeight: '300', display: 'flex', alignItems: 'center' }}>Home <FiChevronRight />  {category} <FiChevronRight /></span> {subcategory}
      </div>
      <div className="mentopwear" style={{ backgroundColor: '' }}>
        {subcategory} - <span style={{ color: '#717171', fontWeight: '300' }}>{productCount} Items</span>
      </div>
      <div className="filtermaindiv" style={{ backgroundColor: '' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '37%' }}>
          <div className="filtersdiv">FILTERS</div>
          <div className="bundlesizediv">
            {/* <select style={{ border: 'none' }}><label style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>Bundles <RiArrowDropDownLine style={{ marginLeft: '10px' }} /></label>
              <option value="Bundles" selected>Bundles</option>
              <option value="Bundles1">Bundles1</option>
              <option value="Bundles2" >Bundles2</option>
              <option value="Bundles3">Bundles3</option>
            </select> */}
            <div className="sortbymaindiv">
            <div className="sortby"> Size:</div>
            <select name='size' className='' id='size' value={filters.size} onChange={handleFilterChange} style={{ border: 'none', color:'black' }}>
              <option value="" >All Size </option>
             {sizeOptions.map((size, index) => (
              <option key={index} value={size}>{size.toUpperCase()}</option>
             ))}
            </select>
            </div>
          </div>
        </div>
        <div className="sortbymaindiv">
          <div className="sortby"> Sort by:</div>
          <select name='sortby' onChange={handleFilterChange} value={filters.sortby} style={{ border: 'none' }}>
            <option value="">All Price </option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductHeroSection;
















