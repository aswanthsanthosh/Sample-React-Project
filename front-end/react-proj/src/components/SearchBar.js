import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="textfield"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ニックネーム / メールアドレスで検索"
      />
    </div>
  );
};

export default SearchBar;