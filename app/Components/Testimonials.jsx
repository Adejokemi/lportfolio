"use client";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const dummyTestimonials = [
  {
    quote: "I'm so happy with the service!",
    author: "John Doe",
  },
  {
    quote: "Amazing work! Highly recommended.",
    author: "Jane Smith",
  },
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(dummyTestimonials);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const rotateTestimonials = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(rotateTestimonials);
  }, [testimonials]);

  return (
    <div className=" lg:my-24 my-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.length > 0 && (
          <div className="rounded-lg overflow-hidden border border-gray-300 bg-white shadow-lg">
            <div className="px-6 py-8">
              <div className="text-center mb-6">
                <div className="flex justify-center items-center"><FaCheckCircle className="text-3xl lg:text-6xl mb-3 text-green-500"/></div>
                <h3 className="text-xl font-bold">
                  Client Testimonials
                </h3>
              </div>
              <div className="text-center text-gray-800 mb-8">
                <p className="text-lg mb-2">
                  {testimonials[currentTestimonialIndex].quote}
                </p>
                <p className="text-sm">
                  - {testimonials[currentTestimonialIndex].author}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
