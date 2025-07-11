// src/components/ImageCard.jsx
import React from 'react';

export default function ImageCard({ img }) {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px', fontSize: '12px', color: '#555' }}>
        Photo by{' '}
        <a href={img.user.links.html} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
          {img.user.name}
        </a>
      </div>
    </div>
  );
}
