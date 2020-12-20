import React, { useState } from "react";
import SearchFormInput from './../forms/SearchFormInput';
import "./searchBar.scss";
import * as FiIcons from "react-icons/fi";

//<FiIcons.FiSearch className='search-icon' />
const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <form>
        <SearchFormInput
          type="name"
          name="name"
          value={search}
          placeholder={"Search"}
          handleChange={(e) => setSearch(e.target.value)}
        />
        
      </form>
      
    </div>
  );
};

export default SearchBar;
