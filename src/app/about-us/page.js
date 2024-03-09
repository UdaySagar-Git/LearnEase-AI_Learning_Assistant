"use client";

import React, { useEffect, useState } from "react";

const AboutUsPage = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setShowHeading(true);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center pt-4">
      <div className="w-full bg-gradient-to-r from-rose-100 to-teal-100 shadow-md rounded-lg p-6">
        <h1 className={`text-4xl font-bold text-center text-gray-800 mb-8 `}>
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We are dedicated to revolutionizing education through the power of
          technology. Our platform combines cutting-edge AI technology with
          innovative teaching methods to provide personalized learning
          experiences for students of all ages.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to make quality education accessible to everyone,
          regardless of their background or geographic location. We believe that
          technology has the potential to democratize education and empower
          learners to reach their full potential.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          AI Integration
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our AI technology analyzes user interactions and learning patterns to
          tailor content and quizzes specifically to each user's needs. This
          personalized approach ensures optimal engagement and retention of
          knowledge.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Generating Customized Questions
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our platform utilizes advanced algorithms to generate customized
          questions based on user preferences, learning objectives, and
          proficiency levels. This feature allows learners to practice and
          reinforce their understanding of key concepts effectively.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Advanced AI-powered learning algorithms</li>
          <li>Interactive lessons and quizzes</li>
          <li>
            Personalized recommendations based on individual learning styles
          </li>
          <li>Real-time progress tracking and analytics</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
