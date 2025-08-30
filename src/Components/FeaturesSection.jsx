import React from "react";
import featureImage from "../assets/travel.jpg"; // replace with your image path
import { FaClock, FaLock, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { Fade } from "react-awesome-reveal"; // import the animation

const features = [
  {
    icon: <FaClock size={24} />,
    title: "Simple",
    description: "Our visa application process is designed to be fast, easy, and stress-free for every applicant worldwide.",
  },
  {
    icon: <FaLock size={24} />,
    title: "Secure",
    description: "We prioritize your data security, ensuring all personal information is protected.",
  },
  {
    icon: <FaCheckCircle size={24} />,
    title: "Success-driven",
    description: "Our goal is to maximize approval rates, helping clients successfully.",
  },
  {
    icon: <FaQuestionCircle size={24} />,
    title: "Dedicated",
    description: "Our team is available 24/7 Q&A, provide guidance entire journey.",
  },
];


const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-12">
      {/* Top Center Heading & Paragraph */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Visa Navigation is awesome</h2>
        <p className="text-gray-600">Here’s why Visa Navigation is awesome and why you should try us.</p>
      </div>

      {/* Two-Column Layout */}
    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
  {/* Left Image with Reveal */}
      <Fade direction="left" cascade triggerOnce>
        <div className="lg:w-full"> {/* Increased width to 60% */}
          <img
            src={featureImage}
            alt="Travel"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </Fade>

       {/* Right Features with Reveal */}
<div className="lg:w-4/5 w-full"> {/* Remaining 40% width */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* 2 cards per row on large screens */}
    {features.map((feature, index) => (
      <Fade
        key={index}
        direction="up"
        cascade
        triggerOnce
        delay={index * 100} // stagger animations
      >
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-start gap-2 shadow-sm hover:shadow-md transition">
          <div className="text-blue-800 mb-2">{feature.icon}</div>
          <h3 className="font-semibold text-lg">{feature.title}</h3>
          <p className="text-gray-700 text-sm">{feature.description}</p>
        </div>
      </Fade>
    ))}
  </div>
  </div>
</div>
    </section>
  );
};

export default FeaturesSection;
