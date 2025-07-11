// src/components/FilterBar.jsx
import React from 'react';

export default function FilterBar({ query, setQuery, onSearch }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
       <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') onSearch();
  }}
  placeholder="Search nature, cars, people..."
  style={{ padding: '10px', width: '60%', fontSize: '16px' }}
/>

      <button onClick={onSearch} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Search
      </button>
    </div>
  );
}
