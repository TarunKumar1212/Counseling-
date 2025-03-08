import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './component/Footer'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import ContactForm from './component/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-brown-900 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog/>} />
        <Route  path="/contact" element={<ContactForm mt="mt-4" />} />
      </Routes>
      
      <div className='mt-1'>
      <Footer />
      </div>
    </div>
  )
}

export default App;
