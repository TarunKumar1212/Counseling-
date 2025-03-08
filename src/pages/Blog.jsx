import React from "react";
import img1 from "../assets/BlogImage/4.png";
import img2 from "../assets/BlogImage/5.png";
import img3 from "../assets/BlogImage/6.png";
import { useEffect } from "react";

function Blog() {

    useEffect(() => {
        
        window.scrollTo(0,0);
    }, [])

  const initialData = [
    {
      img: img1,
      heading: "Why Choose Our Blog?",
      para: "Discover the latest trends and insights in the industry.",
    },
    {
      img: img2,
      heading: "The Future of Tech",
      para: "Stay updated with the newest technologies and innovations.",
    },
    {
      img: img3,
      heading: "Mastering Your Skills",
      para: "Tips and tricks to enhance your expertise in various fields.",
    },
  ];

  return (
    <div className= "mt-18 bg-gray-100 py-10 px-6">
      <div className="flex flex-wrap justify-center gap-8">
        {initialData.map((item, index) => (
          <div
            key={index}
            className="w-[350px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-[220px] object-cover rounded-t-xl"
              src={item.img}
              alt={`Blog ${index + 1}`}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900">{item.heading}</h2>
              <p className="text-gray-600 mt-2">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
