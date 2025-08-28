// LatestVisas.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const navigate = useNavigate();

  // Function to fetch visas from backend
  const fetchVisas = async () => {
    try {
      const res = await fetch("https://visa-navigation-server.vercel.app/allvisa");
      const data = await res.json();
      const sortedVisas = data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setVisas(sortedVisas.slice(0, 6)); 
    } catch (err) {
      console.error("Failed to fetch visas:", err);
    }
  };

  useEffect(() => {
    fetchVisas();

    const interval = setInterval(fetchVisas, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-10 px-4 md:px-8 lg:px-16">
        {/* Challenge  */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        <Typewriter
            words={['Latest Visas', 'Explore Top Countries', 'Apply Now!']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
        />
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300 flex flex-col"
          >
            <img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{visa.country}</h3>
                <p className="text-sm sm:text-base"><strong>Visa Type:</strong> {visa.visaType}</p>
                <p className="text-sm sm:text-base"><strong>Processing Time:</strong> {visa.processingTime}</p>
                <p className="text-sm sm:text-base"><strong>Fee:</strong> {visa.fee}</p>
                <p className="text-sm sm:text-base"><strong>Validity:</strong> {visa.validity}</p>
                <p className="text-sm sm:text-base"><strong>Application Method:</strong> {visa.applicationMethod}</p>
              </div>
              <button
                onClick={() => navigate(`/visadetails/${visa._id}`)}
                className="mt-4 btn btn-outline btn-warning w-full"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/allvisa")}
          className="btn  btn-warning px-6 py-2 text-base sm:text-lg"
        >
          See All Visas
        </button>
      </div>
    </section>
  );
};

export default LatestVisas;
