// src/App.jsx
import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import FilterBar from './components/FilterBar';
import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const fetchImages = async (search = '') => {
    try {
      const url = search
        ? `https://api.unsplash.com/search/photos?query=${search}&per_page=30&client_id=${ACCESS_KEY}`
        : `https://api.unsplash.com/photos/random?count=30&client_id=${ACCESS_KEY}`;

      const res = await axios.get(url);
      const data = search ? res.data.results : res.data;
      setImages(data);
    } catch (err) {
      console.error('Unsplash API error:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Unsplash Image Gallery</h1>
      <FilterBar query={query} setQuery={setQuery} onSearch={() => fetchImages(query)} />
      <Gallery images={images} />
      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '12px', color: '#555' }}>
        Photos from <a href="https://unsplash.com">Unsplash</a>
      </footer>
    </main>
  );
}

export default App;
