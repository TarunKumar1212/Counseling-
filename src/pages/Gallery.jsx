import React, { useState,useEffect } from "react";
import img1 from "../assets/Gallery/4.png";
import img2 from "../assets/Gallery/5.png";
import img3 from "../assets/Gallery/6.png";

function Gallery() {
  const initialData = [img1, img2, img3, img1, img2, img3]; // More images for demo

  const [images] = useState(initialData);
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <h2 className="text-5xl text-amber-500 font-bold text-center mb-6">Image Gallery</h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4  text-white px-3 py-1 rounded-full text-xl"
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
