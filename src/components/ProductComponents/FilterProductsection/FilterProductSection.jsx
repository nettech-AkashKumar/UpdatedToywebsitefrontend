import React, { useState } from "react";
import { Search } from "lucide-react";
import "./FilterProductSection.css";

const FilterProductSection = ({ title, filter, filters, setFilters }) => {
  console.log("title", "filter", title, filter);
  const normalizeFieldName = (title) => {
    switch (title.toLowerCase()) {
      case "Brands":
        return "brand";
      case "Colours":
        return "color";
      case "DiscountRange":
        return "discount";
      default:
        return title.toLowerCase();
    }
  };
  const fieldName = normalizeFieldName(title); //eg brand, color, discount

  const handleChange = (value) => {
    const current = filters[fieldName] || [];
    const valueLower = value.toLowerCase();

    const updated = current.includes(valueLower)
      ? current.filter((item) => item !== valueLower)
      : [...current, valueLower];
    console.log("Updating filters", fieldName, "=>", updated);
    setFilters((prev) => ({
      ...prev,
      [fieldName]: updated,
    }));
  };

  // for search
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const filteredOptions = filter.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // state for view more section
  const [showAll, setShowAll] = useState(false)

  return (
    <div className="filterproductmainsection">
      <div className="filterheaderradiodiv">
        {/* header and search */}
        <div className="headersearch">
          <h2 className="filterheading">{title}</h2>
          {/*search item */}

          <div style={{ position: "relative", width: "150px" }}>
            {/* only show search for non discount item */}
            {fieldName !== "discountrange" && (
              <>
                <input
                  type="text"
                  // placeholder="Search..."
                  value={searchTerm}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={isFocused ? "Type to Search..." : "Search..."}
                  className="search-inputfilters"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    paddingRight: "24px",
                    border: "1px solid #ff8272",
                    borderRadius:'2px'
                  }}
                />
                <Search
                  className="filtersearch"
                  style={{
                    position: "absolute",
                    right: "4px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </>
            )}
          </div>
        </div>
        {/* radio buttons */}
        <div className="filterradiotextdiv my-3">
          {(showAll ? filteredOptions : filteredOptions.slice(0, 8)).map((cat, index) => (
  <label key={index}>
    <input
      className="customcheckboxcolorchange"
      style={{
        backgroundColor: "#717171",
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        border: "1px",
      }}
      type="checkbox"
      name={fieldName}
      value={cat}
      checked={filters[fieldName]?.includes(cat.toLowerCase())}
      onChange={() => handleChange(cat)}
    />
    <span
      className="px-4"
      style={{
        color: "#383838",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "150%",
        letterSpacing: "0",
      }}
    >
      {cat}
    </span>
  </label>
))}
        </div>
        {/* view button */}
        {filteredOptions.length > 10 && (
        <div className="filterviewmorebutton">
          <button
            style={{
              color: "#FF8272",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "0",
            }}
            onClick={() => setShowAll(!showAll)}
          >
          {showAll ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default FilterProductSection;
