import React, { useState } from "react";


const faqs = [
  {
    question: "What is Visa Navigation?",
    answer: "Visa Navigation is a platform that helps users understand visa processes, requirements, and guidance for different countries.",
  },
  {
    question: "How do I check visa requirements?",
    answer: "You can check visa requirements by selecting your destination country and your nationality on our platform.",
  },
  {
    question: "Is Visa Navigation free to use?",
    answer: "Yes! Our basic guidance and information are completely free. Some premium features may require a subscription.",
  },
  {
    question: "Can I get help for multiple countries?",
    answer: "Absolutely! Our platform provides visa guidance for multiple countries around the world.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
