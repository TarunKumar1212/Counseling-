import { useState } from "react";
import { useEffect } from "react";
function ContactForm({mt}) {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    mobile: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xanqrzod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Successfully Submitted!");
        setFormData({ name: "", email: "", course: "", mobile: "" });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage("Submission Failed!");
      }
    } catch (error) {
      setMessage("Error submitting form!");
    }
  };

  return (
    <div className={`${mt=="mt-4"? "mt-18 mb-5":""} w-full max-w-6xl  mx-auto bg-amber-50 text-gray-800 shadow-xl rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-between items-center border border-gray-300 mt-6`}>
      <div className="mb-6 md:mb-0  text-center md:text-left w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-600">Need Assistance?</h3>
        <p className="text-yellow-400 font-semibold mt-2 text-lg">Connect with Our Experts Today!</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course"
          required
          className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          required
          className="w-full px-4 py-3 border border-gray-400 bg-gray-100 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Submit
        </button>
        {message && <p className="text-green-500 text-center">{message}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
