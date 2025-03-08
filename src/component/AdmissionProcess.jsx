import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AdmissionProcess = () => {
  const steps = [
    {
      number: "1",
      title: "SCIENTIFIC CAREER COUNSELLING",
      description:
        "Helps to manage student's problem such as low concentration in study, trust issues with parents.",
    },
    {
      number: "2",
      title: "APPLICATION & DOCUMENTATION",
      description:
        "Need to follow proper admission procedure as per college rules. Fill application form and submit required documents.",
    },
    {
      number: "3",
      title: "ADMISSION GUIDANCE",
      description:
        "Complete admission guidance for various courses including course fees, placement, hostel fees, education loan, etc.",
    },
    {
      number: "4",
      title: "GET ADMISSION",
      description:
        "We offer direct admission in top colleges or Universities through management quota. Get admission letter and education loan facility.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-12 gap-10">
      {/* Admission Process Section */}
      <section className="md:w-1/2 flex flex-col justify-start">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Admission Process Simplified
        </h2>
        <p className="text-gray-600 mb-8">
          At Ishant Admissions, we follow a simple process to ensure that you get the
          most out of our education consultants. Our steps include the following:
        </p>
        <Link to="/">
          <button
            onClick={top}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
          >
            Get Started Now
          </button>
        </Link>
      </section>

      {/* Steps Section */}
      <section className="md:w-1/2 space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-center bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <div className="absolute left-0 w-16 h-full flex items-center justify-center rounded-l-lg transition-all duration-300 bg-blue-300 group-hover:bg-blue-600">
              <span className="text-3xl font-bold text-white">{step.number}</span>
            </div>
            <div className="ml-20">
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdmissionProcess;
