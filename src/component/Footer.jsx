import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
      <footer className="bg-[#033343] text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm leading-relaxed  tracking-wide mt-2">
            Our education services aim to fulfill students' wishes and help their parents make the most important choices. As one of the top education consultants, we provide complete assistance, from choosing a career path to getting admission in MBBS, MBA, and engineering.
            </p>
            <div className="flex gap-4 mt-4">
              <i className="fab fa-facebook-f cursor-pointer text-lg"></i>
              <i className="fab fa-linkedin-in cursor-pointer text-lg"></i>
              <i className="fab fa-youtube cursor-pointer text-lg"></i>
              <i className="fab fa-instagram cursor-pointer text-lg"></i>
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">QUICK LINK</h3>
            <ul className="mt-2 space-y-2">
              
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/">Home</Link>
                </li>
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/about">About Us</Link>
                </li>
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/courses">Courses</Link>
                </li>
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/gallery">Gallery</Link>
                </li>
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/blog">Blog</Link>
                </li>
                <li  className="cursor-pointer hover:text-gray-300">
                  <Link to ="/contact">Contact Us</Link>
                </li>
              
            </ul>
          </div>
  
          {/* Get Admission */}
          <div>
            <h3 className="text-lg font-bold">Get Admission</h3>
            <ul className="mt-2 space-y-2">
              {['Management', 'B.Tech', 'LAW', 'Computer Science', 'Bachelor Of Arts', 'Pharmacy', 'Commerce'].map((admission) => (
                <li key={admission} className="cursor-pointer hover:text-gray-300">{admission}</li>
              ))}
            </ul>
          </div>
  
          {/* Top Universities & Colleges */}
          <div>
            
            <ul className="mt-2 text-4xl space-y-2">
              
                <li  className="cursor-pointer hover:text-gray-300"><FaFacebook/></li>
                <li  className="cursor-pointer hover:text-gray-300"><FaInstagram/></li>
                <li  className="cursor-pointer hover:text-gray-300"><MdWhatsapp/></li>
                <li  className="cursor-pointer hover:text-gray-300"><FaXTwitter/></li>
              
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm mt-10 border-t border-gray-500 pt-4">
          &copy; Copyrights. ...
        </div>
      </footer>
    );
  };
  
  export default Footer;