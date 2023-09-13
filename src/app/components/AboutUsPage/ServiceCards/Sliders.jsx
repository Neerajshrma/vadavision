// Carousel.js
import React, { useState } from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

function Sliders() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="relative">
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full"
      >
        Previous
      </button>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full"
      >
        Next
      </button>
    </div>
  );
}

export default Sliders;
