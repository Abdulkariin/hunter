import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder, handlechange}) => (
  <input
  className='search-box'
  type='search'
  placeholder=''
  onChange={handlechange}
/>
);
