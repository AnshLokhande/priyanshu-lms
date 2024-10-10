'use client';
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { courses } from './Data'; // Ensure this path is correct
import { useRouter, useSearchParams } from 'next/navigation';
import PaymentHandlerButton from '@/components/PaymentHandlerButton';

const Cour = () => {
  const location = useSearchParams();
  const navigate = useRouter();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  // Separate hovered states for popular and filtered courses
  const [hoveredPopularCourse, setHoveredPopularCourse] = useState(null);
  const [hoveredFilteredCourse, setHoveredFilteredCourse] = useState(null);

  // Randomly select 4 popular courses
  const popularCourses = courses.slice(0, 4); // Adjust if needed

  // Filter courses based on the search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery) ||
    course.description.toLowerCase().includes(searchQuery)
  );

  const handleEnrollClick = (courseId) => {
    navigate.push(`/enroll/${courseId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 text-gray-100">
      <div className="container mx-auto flex-grow py-12 px-4 md:px-8">

        {/* Popular Courses Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {popularCourses.map((course) => (
              <div
                key={course.id}
                className="relative bg-white text-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredPopularCourse(course.id)}
                onMouseLeave={() => setHoveredPopularCourse(null)}
              >
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{course.title}</h4>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                  <p className="font-bold text-lg text-indigo-900 mt-2">{course.price}</p>
                </div>
                <div
                  className={`absolute inset-0 bg-black bg-opacity-75 p-4 transition-opacity ${hoveredPopularCourse === course.id ? "opacity-100" : "opacity-0"}`}
                >
                  <h4 className="font-semibold text-white text-lg">{course.title}</h4>
                  <p className="text-sm mt-1 text-white">{course.lastUpdated}</p>
                  <p className="text-sm mt-2 text-white">{course.duration} total hours · {course.lectureCount} lectures · All Levels</p>
                  <p className="text-sm mt-2 text-white">{course.description}</p>
                  <ul className="text-sm mt-2 text-white space-y-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <FaPlayCircle className="mr-1 text-blue-500" /> {highlight}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleEnrollClick(course.id)}
                    className="mt-4 py-2 px-4 w-full font-semibold rounded bg-blue-600 text-white hover:bg-blue-800 transition duration-300"
                  >
                    More Info
                  </button>
                  {/* Enroll Now Button */}
                  <PaymentHandlerButton
                    finalAmt={parseFloat(course.price)} // Ensure price is parsed to float
                    fullName="John Doe" // Replace with actual user's name
                    email="john.doe@example.com" // Replace with actual email
                    contact="1234567890" // Replace with actual contact number
                  >
                    Enroll Now
                  </PaymentHandlerButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Courses Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center text-white">All Courses</h2>
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="relative bg-white text-black shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredFilteredCourse(course.id)}
                  onMouseLeave={() => setHoveredFilteredCourse(null)}
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{course.title}</h4>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                    <p className="font-bold text-lg text-indigo-900 mt-2">{course.price}</p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-75 p-4 transition-opacity ${hoveredFilteredCourse === course.id ? "opacity-100" : "opacity-0"}`}
                  >
                    <h4 className="font-semibold text-white text-lg">{course.title}</h4>
                    <p className="text-sm mt-1 text-white">{course.lastUpdated}</p>
                    <p className="text-sm mt-2 text-white">{course.duration} total hours · {course.lectureCount} lectures · All Levels</p>
                    <p className="text-sm mt-2 text-white">{course.description}</p>
                    <ul className="text-sm mt-2 text-white space-y-1">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <FaPlayCircle className="mr-1 text-blue-500" /> {highlight}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleEnrollClick(course.id)}
                      className="mt-4 py-2 px-4 w-full font-semibold rounded bg-blue-600 text-white hover:bg-blue-800 transition duration-300"
                    >
                      More Info
                    </button>

                    {/* Enroll Now Button */}
                    <PaymentHandlerButton
                      finalAmt={parseFloat(course.price)} // Ensure price is parsed to float
                      fullName="John Doe" // Replace with actual user's name
                      email="john.doe@example.com" // Replace with actual email
                      contact="1234567890" // Replace with actual contact number
                    >
                      Enroll Now
                    </PaymentHandlerButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No courses found matching your search.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cour;
