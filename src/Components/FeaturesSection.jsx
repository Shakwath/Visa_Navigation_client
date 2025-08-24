import React from "react";
import featureImage from "../assets/travel.jpg"; // replace with your image path
import { FaClock, FaLock, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaClock size={24} />,
    title: "Simple",
    description: "Our process is simpler than the government's.",
  },
  {
    icon: <FaLock size={24} />,
    title: "Secure",
    description: "Your security is our priority.",
  },
  {
    icon: <FaCheckCircle size={24} />,
    title: "Success-driven",
    description: "99% of our applications are approved.",
  },
  {
    icon: <FaQuestionCircle size={24} />,
    title: "Dedicated",
    description: "We're here to help 24/7.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4  flex flex-col items-center gap-12">
      {/* Top Center Heading & Paragraph */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Visa Navigation is awesome</h2>
        <p className="text-gray-600">Here’s why Visa Navigation is awesome and why you should try us.</p>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
        {/* Left Image */}
        <div className="lg:w-1/2">
          <img src={featureImage} alt="Travel" className="rounded-lg shadow-lg w-full object-cover" />
        </div>

        {/* Right Features */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg flex flex-col items-start gap-2 shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-800 mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
