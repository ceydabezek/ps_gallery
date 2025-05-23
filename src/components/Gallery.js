import React, { useState } from 'react';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            style={{ width: '150px', height: '100px', objectFit: 'cover', cursor: 'pointer', borderRadius: '8px', transition: 'transform 0.3s' }}
            onClick={() => setSelectedImg(img)}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImg}
            alt="Selected"
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;