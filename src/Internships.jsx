'use client';
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation'; // Correct Next.js hooks for routing

const internships = [
  {
    id: 1,
    title: 'Software Development Internship',
    company: 'Learning Destiny',
    stipend: '$500/month',
    imageUrl: '/SDIntern.png', // Replace with your image URL
    description: 'Join our team to work on exciting software projects and enhance your skills.',
    lastUpdated: 'Last updated: September 2024',
    duration: '3 months',
    responsibilities: ['Developing web applications', 'Collaborating with team members', 'Participating in code reviews'],
  },
  {
    id: 2,
    title: 'Digital Marketing Internship',
    company: 'Learning Destiny',
    stipend: '$300/month',
    imageUrl: '/DMIntern.png', // Replace with your image URL
    description: 'Gain hands-on experience in digital marketing strategies and social media management.',
    lastUpdated: 'Last updated: August 2024',
    duration: '6 months',
    responsibilities: ['Creating content for social media', 'Assisting in SEO strategies', 'Analyzing marketing data'],
  },
  {
    id: 3,
    title: 'Graphic Design Internship',
    company: 'Learning Destiny',
    stipend: '$400/month',
    imageUrl: '/GraphicIntern.png', // Replace with your image URL
    description: 'Work with our design team to create engaging visuals for various projects.',
    lastUpdated: 'Last updated: July 2024',
    duration: '4 months',
    responsibilities: ['Designing graphics for social media', 'Assisting in branding projects', 'Participating in brainstorming sessions'],
  },
];

const Internship = () => {
  const router = useRouter(); // Correct hook for navigation in Next.js
  const searchParams = useSearchParams(); // Hook for handling search parameters in Next.js
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const [hoveredInternship, setHoveredInternship] = useState(null);

  // Filter internships based on the search query
  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(searchQuery) ||
    internship.description.toLowerCase().includes(searchQuery)
  );

  const handleApplyClick = (internshipId) => {
    router.push(`/apply/${internshipId}`); // Corrected navigation method
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8 bg-light-blue-100 text-black">
      
      {/* All Internships Section */}
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center">All Internships</h2>
        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredInternships.map(internship => (
              <div
                key={internship.id}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredInternship(internship.id)}
                onMouseLeave={() => setHoveredInternship(null)}
              >
                <img src={internship.imageUrl} alt={internship.title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-75">
                  <h4 className="text-white font-semibold">{internship.title}</h4>
                  <p className="text-gray-300">{internship.company}</p>
                  <p className="text-white font-bold">{internship.stipend}</p>
                </div>
                {hoveredInternship === internship.id && (
                  <div className="absolute inset-0 bg-white p-4 transition-opacity">
                    <h4 className="font-semibold">{internship.title}</h4>
                    <p>{internship.lastUpdated}</p>
                    <p>{internship.duration}</p>
                    <p>{internship.description}</p>
                    <ul>
                      {internship.responsibilities.map((responsibility, index) => (
                        <li key={index}>
                          <FaPlayCircle className="inline-block mr-1 text-blue-500" /> {responsibility}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleApplyClick(internship.id)}
                      className="mt-4 py-2 px-4 w-full font-semibold rounded bg-black text-white hover:bg-blue-600 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No internships found matching your search.</p>
        )}
      </section>
    </div>
  );
};

export default Internship;
