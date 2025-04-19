import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "./SearchBar.css"; // Import the new CSS file

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes"
                value={value}
                onChange={onChange}
                className="search-input"
            />
            {value && (
                <IoMdClose
                    className="search-clear-icon"
                    onClick={onClearSearch}
                />
            )}
            <FaMagnifyingGlass
                className="search-icon"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchBar;