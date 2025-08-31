import React from 'react';
import { projectExamples } from '../data/projectExamples';

const ProjectExamples = ({ onQuoteClick }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Recent Sourcing Examples
          </h2>
          <p className="text-xl text-gray-600">
            What We've Recently Sourced for Our Clients
          </p>
        </div>

        <div className="space-y-8">
          {projectExamples.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  {/* Project Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h3>

                    {/* Equipment List */}
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {project.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Project Metrics */}
                    {/* <div className="flex flex-wrap gap-6 items-center">
                      <div className="bg-green-100 px-4 py-2 rounded-lg">
                        <span className="text-green-800 font-semibold">
                          Project Value: {project.value}
                        </span>
                      </div>
                      <div className="bg-blue-100 px-4 py-2 rounded-lg">
                        <span className="text-blue-800 font-semibold">
                          Delivery: {project.delivery}
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Project Image Placeholder */}
              {/* <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center border-t border-gray-100">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <p className="text-sm">Project Documentation Available</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button 
              onClick={onQuoteClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Similar Quote
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              View More Case Studies
            </button>
          </div>
          
          <p className="text-gray-600 mt-4 text-lg">
            Over <span className="font-bold text-blue-600">500+ companies</span> served since 2010
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectExamples;