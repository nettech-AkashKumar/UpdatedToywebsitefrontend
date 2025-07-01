import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const SearchFade = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  // Auto-focus input when open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="flex items-center space-x-2 relative">
      <button
        onClick={toggleSearch}
        className="p-2 rounded-full "
      >
        <FiSearch size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.input
            key="fade-input"
            ref={inputRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Products"
            className="px-3 py-1 border rounded focus:outline-none absolute left-12 top-0 bg-white shadow"
            style={{width:"130px", zIndex:"1"}}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFade;
