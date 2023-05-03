import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
