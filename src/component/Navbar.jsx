import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current route

  // Function to check if link is active
  const isActive = (path) => location.pathname === path ? "text-amber-400" : "text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo / Brand Name */}
        <Link to="/" className="text-xl font-bold text-white tracking-wide hover:text-amber-400 transition-colors">
          MyBrand
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className={`hover:text-amber-400 transition-colors ${isActive("/")}`}>Home</Link></li>
          <li><Link to="/about" className={`hover:text-amber-400 transition-colors ${isActive("/about")}`}>About Us</Link></li>
          <li><Link to="/courses" className={`hover:text-amber-400 transition-colors ${isActive("/courses")}`}>Courses</Link></li>
          <li><Link to="/gallery" className={`hover:text-amber-400 transition-colors ${isActive("/gallery")}`}>Gallery</Link></li>
          <li><Link to="/blog" className={`hover:text-amber-400 transition-colors ${isActive("/blog")}`}>Blog</Link></li>
          <li><Link to="/contact" className={`hover:text-amber-400 transition-colors ${isActive("/contact")}`}>Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 transition-all duration-300 ${isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center space-y-4">
          <li><Link to="/" className={`hover:text-amber-400 transition-colors ${isActive("/")}`} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={`hover:text-amber-400 transition-colors ${isActive("/about")}`} onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/courses" className={`hover:text-amber-400 transition-colors ${isActive("/courses")}`} onClick={() => setIsOpen(false)}>Courses</Link></li>
          <li><Link to="/gallery" className={`hover:text-amber-400 transition-colors ${isActive("/gallery")}`} onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/blog" className={`hover:text-amber-400 transition-colors ${isActive("/blog")}`} onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" className={`hover:text-amber-400 transition-colors ${isActive("/contact")}`} onClick={() => setIsOpen(false)}>Contact US</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
