import { motion } from "framer-motion";
import ContactForm from "../component/ContactForm";
import Carousel from "../component/Carousel";
import img3 from "../assets/HomeImage/img3.webp";
import cardImg1 from "../assets/ForSmallCards/4.png"
import cardImg2 from "../assets/ForSmallCards/5.png"
import cardImg3 from "../assets/ForSmallCards/6.png"
import AdmissionProcess from "../component/AdmissionProcess";
import Footer from "../component/Footer";

function Home() {
  return (
    <div className="relative">
      <Carousel />

      {/* Contact Us Section */}
      <ContactForm />

      {/* Meet the Founder Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center text-black px-4 md:px-12">
        {/* Left Side - Text Content */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold font-serif text-3xl md:text-5xl text-orange-600">
            Meet the Founder
          </h2>
          <p className="mt-6 text-gray-700 font-medium text-lg leading-relaxed">
            An Admission Consultant is someone who helps students navigate the
            application process for universities, colleges, graduate schools, or
            specialized programs. Jaspreet Saluja has been working in the
            admission field for over 3 years, providing guidance and support
            throughout the application journey—from selecting the right
            universities to crafting a standout application.
            <br />
            <br />
            She offers direct admission through management quotas for various
            courses like Engineering, MBA, B.Sc., BBA, B.Com, and many more.
            Built on a strong commitment to parents’ satisfaction and adding
            value to students' careers, Ishant Admission Consultancy acts as a
            “One Trusted Advisor,” offering a complete range of admission
            services. Our strength lies in the dedicated efforts of our
            professionals, which include academic counselors and experts with
            in-depth experience in providing multi-disciplinary services.
            <br />
            <br />
            Jaspreet is well-loved and admired for her work. She remains
            committed to providing more students with a seamless and supportive
            admission experience.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={img3}
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover border-4 border-yellow-500"
            alt="Education Consultant"
          />
        </motion.div>
      </div>

      {/* Our Approach Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center text-black px-4 md:px-12">
        {/* Left Side - Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={img3}
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover border-4 border-yellow-500"
            alt="Education Consultant"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="md:w-1/2 w-full mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold font-serif text-3xl md:text-5xl text-orange-600">
            Our Approach
          </h2>
          <p className="mt-6 text-gray-700 font-medium text-lg leading-relaxed">
            Consistent value addition to the student’s career forms the core of
            our approach. At Ishant Admission Consultancy, we spend significant
            time analyzing changing market dynamics in education, industry
            requirements, college performance, and student goals. This enables
            us to provide innovative and out-of-the-box solutions.
            <br />
            <br />
            Our primary focus is always on how we can add value to a student’s
            aspirations. This commitment also helps us stay updated with
            evolving industry dynamics and ever-changing regulations in the
            education sector.
          </p>
        </motion.div>
      </div>

      <div className="mt-5 text-black">
        <h2 className="mt-3 font-bold ml-26">Why Ishant Admissions?</h2>
        <p className="ml-26 text-gray-800">
          Get hassle-free direct admission to top colleges and universities. <br />
          Receive expert education guidance for a brighter future. <br />
          Explore 1000+ colleges across India and choose the best fit for you. <br />
          Access detailed college reviews on courses, placements, fees, and more.
        </p>
      </div>


  <section className="max-w-6xl mx-auto mt-12 px-6">
  <h2 className="text-center text-4xl font-bold text-gray-900">Our Services</h2>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Explore Top Colleges */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg1} alt="Explore Colleges" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Explore Top Colleges</h3>
      <p className="mt-2 text-gray-600">
        Our team carefully vets the top colleges in India and ranks them based on multiple factors to help you choose the perfect college.
      </p>
    </div>

    {/* Choose Right Course */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg2} alt="Choose Right Course" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Choose the Right Course</h3>
      <p className="mt-2 text-gray-600">
        Not sure which course to go for? We provide a list of all popular courses along with their details to help you make an informed decision.
      </p>
    </div>

    {/* Career Guidance */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg3} alt="Career Guidance" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Career Guidance</h3>
      <p className="mt-2 text-gray-600">
        Choosing the right career based on your qualifications and expertise can be challenging. Our consultants are here to help.
      </p>
    </div>

    {/* Get Admission */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg3} alt="Get Admission" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Get Admission</h3>
      <p className="mt-2 text-gray-600">
        Once you’ve chosen the right college, our education consultants will guide you through the admission process, including eligibility criteria and documentation.
      </p>
    </div>

    {/* Scholarships */}
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg3} alt="Scholarships" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Scholarships</h3>
      <p className="mt-2 text-gray-600">
        In addition to Indian colleges, we assist students who wish to study abroad, helping them secure scholarships and logistical support.
      </p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-32 h-32 object-cover rounded-full" src={cardImg3} alt="Scholarships" />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Study Abroad</h3>
      <p className="mt-2 text-gray-600">
      Along with Indian colleges, our consultants also help students who wish to study abroad. we help arranging required logistical support to make it happen.
      </p>
    </div>
  </div>
</section>

  <AdmissionProcess/>
  
  </div>
  );
}

export default Home;
