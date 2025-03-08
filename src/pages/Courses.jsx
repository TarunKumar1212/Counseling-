import React, { useState } from 'react';
import img1 from "../assets/CrouselImage/1.png";
import { motion } from 'framer-motion';
import img2 from "../assets/CourseImage/Dikshant Gulati-CFO.jpg";
import { Link } from "react-router-dom";
import { useEffect } from 'react';


function Courses() {
  const [showMore, setShowMore] = useState(false);

  const courses = [
    { title: "Management", desc: "MBA | BBA" },
    { title: "B.Tech / M.Tech", desc: "CS | ME | EEE | CE" },
    { title: "LAW", desc: "BALLB | LLB | LLM" },
    { title: "Computer Science", desc: "BCA | MCA | PGDCA" },
    { title: "Bachelor Of Arts", desc: "ECO | ENG | HINDI | HISTORY | POLITICAL SCIENCE | SOCIO | PSY | GEO" },
    { title: "Pharmacy", desc: "B.Pharm | D.Pharm" },
    { title: "Commerce", desc: "B.Com | M.Com" },
    { title: "Science", desc: "B.Sc | M.Sc (Phy, Chem, Botany, Maths, Zoo)" },
    { title: "Library Science", desc: "B.Lib | M.Lib" },
    { title: "Agriculture", desc: "B.Sc | M.Sc" },
    { title: "Physical Education", desc: "B.P.Ed | M.A" },
    { title: "Polytechnic", desc: "CS | ME | EEE | EE | CE | MINING" },
    { title: "Education", desc: "B.Ed | D.EI.ED | M.Ed | M.A" },
    { title: "Social Work", desc: "MSW" },
    { title: "Ph.D", desc: "All Programmes" },
    { title: "Para-Medical", desc: "DMLT | BMLT | X-RAY | OT | DRESSER" },
  ];

  useEffect(() => {
      window.scrollTo(0,0);
    }, [])
  

  return (
    <div className="text-black font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] mb-12">
        <img src={img1} alt="Courses" className="w-full h-full object-cover block" />
        <motion.h2
          className="absolute inset-0 flex items-center justify-center text-orange-500 text-6xl font-bold  bg-opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, color: "#facc15" }}
        >
          Explore Our Courses
        </motion.h2>
      </div>

      {/* Courses Section */}
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Courses By Interest</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center'>
          {courses.slice(0, showMore ? courses.length : 8).map((course, index) => (
            <div key={index} className='shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-6 rounded-xl border border-gray-200'>
              <img src={img2} className='rounded-xl object-cover h-32 w-full mb-4' alt={course.title} />
              <h2 className='font-bold text-xl text-gray-900'>{course.title}</h2>
              <p className='font-medium text-gray-600 mt-1'>{course.desc}</p>
              <Link to="" className='block mt-4 text-white font-semibold py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-md shadow-md text-center'>View All Courses</Link>
            </div>
          ))}
        </div>

        {!showMore && (
          <button 
            onClick={() => setShowMore(true)}
            className='mt-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all text-white font-semibold py-3 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Courses;