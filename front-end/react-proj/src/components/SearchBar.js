import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='search-bar'>
    <TextField
      label="ニックネーム / メールアドレスで検索"
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
    </div>
  );
};

export default SearchBar;