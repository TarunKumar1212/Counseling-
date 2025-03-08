import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom"

const CourseDetail = () => {
  const location = useLocation();
  const course = location.state?.course;

  if (!course || Object.keys(course).length === 0) {
    return (
      <div className="text-gray-800 text-center text-2xl p-6 font-semibold">
        No course data available.
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-16 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center py-12">
        <h1 className="text-4xl font-bold">{course.head || "Course Details"}</h1>
      </div>

      {/* Course Content */}
      <div className="max-w-5xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        {/* Introduction */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
          <p className="mt-2 text-lg text-gray-700">{course.p1 || "No description available."}</p>
        </div>

        {/* Key Highlights */}
        {course.p2 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Key Highlights</h2>
            <p className="mt-2 text-lg text-gray-700">{course.p2}</p>
          </div>
        )}

        {/* Career Opportunities */}
        {course.p3 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Career Opportunities</h2>
            <p className="mt-2 text-lg text-gray-700">{course.p3}</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Explore More Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
