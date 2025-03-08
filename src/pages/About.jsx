import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/ChairPersons/Dikshant Gulati-CFO.jpg";
import img2 from "../assets/ChairPersons/Pooja Saluja-CMO.jpg";
import img3 from "../assets/ChairPersons/Ramesh Saluja-CoFounder.jpg";
import { useEffect} from "react";

function About() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full font-bold mt-16 h-[180px] bg-black md:text-6xl text-3xl text-white flex flex-col items-center justify-center"
      >
        <h2 className="text-yellow-300">About Us</h2>
        <div className="border-b-4 rounded-2xl mt-1.5 border-amber-300 w-[160px]"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black mt-10"
        >
          <h2 className="text-black font-bold text-3xl">About Ishant Admission</h2>
          <p className="text-lg text-gray-800 mt-4 leading-relaxed">
            Ishant Admissions is a leading education consultant firm that helps students 
            get admission to top-rated colleges, universities, and institutions across India and abroad. 
            Our experienced team ensures a hassle-free experience, guiding students through admission 
            procedures, course selection, career opportunities, and more.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className="text-black font-bold text-3xl">Why Choose Us</h2>
          <p className="text-lg text-gray-800 mt-4 leading-relaxed">
            As one of the top education consultants, we provide complete assistance, 
            from choosing a career path to securing admission in MBBS, MBA, and engineering programs. 
            Our team is deeply committed to ensuring students' best interests are prioritized.
          </p>
        </motion.div>

        {/* Best Education Consulting Firm */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h2 className="text-black font-bold text-3xl">Best Education Consulting Firm</h2>
          <p className="text-lg text-gray-800 mt-4 leading-relaxed">
            We guide students through career choices, university selection, admission procedures, 
            interview preparation, and essential documentation like SOPs and LORs.
          </p>
        </motion.div>

        {/* Our Chairpersons */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-amber-700 font-bold text-4xl">Our Leadership</h2>
          <div className="border-b-4 rounded-2xl mt-2 border-amber-500 w-[200px] mx-auto"></div>
        </motion.div>

        {/* Chairpersons Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Co-Founder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
          >
            <img src={img3} alt="Co-Founder" className="w-40 h-40 rounded-full object-cover" />
            <h3 className="text-amber-700 font-bold text-2xl mt-4">Co-Founder</h3>
            <p className="text-gray-700 mt-2">
              Ramesh Saluja played a key role in establishing our admission consultancy, helping students 
              secure the best educational opportunities.
            </p>
          </motion.div>

          {/* CFO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
          >
            <img src={img1} alt="CFO" className="w-40 h-40 rounded-full object-cover" />
            <h3 className="text-amber-700 font-bold text-2xl mt-4">CFO</h3>
            <p className="text-gray-700 mt-2">
              Dikshant Gulati manages financial strategy and growth, ensuring a seamless admission process for students.
            </p>
          </motion.div>

          {/* CMO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition transform hover:scale-105"
          >
            <img src={img2} alt="CMO" className="w-40 h-40 rounded-full object-cover" />
            <h3 className="text-amber-700 font-bold text-2xl mt-4">CMO</h3>
            <p className="text-gray-700 mt-2">
              Pooja Saluja leads marketing strategies to expand our reach, ensuring students make informed career choices.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
