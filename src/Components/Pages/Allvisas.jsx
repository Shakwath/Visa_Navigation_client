import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allvisacard from './Allvisacard';

const Allvisas = () => {
  const allvisas = useLoaderData();
  const [selectedType, setSelectedType] = useState("All");

  // Extract unique visa types
  const visaTypes = ["All", ...new Set(allvisas.map(v => v.visaType))];

  // Filter visas based on selected type
  const filteredVisas =
    selectedType === "All"
      ? allvisas
      : allvisas.filter(v => v.visaType === selectedType);

  return (
    <div className="mx-4 md:mx-10 lg:mx-20">
      <h2 className="text-center text-3xl md:text-4xl text-yellow-600 font-bold mb-3">
  {selectedType === "All"
    ? `See All Added Visas: ${filteredVisas.length}`
    : `See ${selectedType}: ${filteredVisas.length}`}
</h2>


      {/* ✅ Dropdown filter */}
      <div className="flex justify-center mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {visaTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Visa cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
        {filteredVisas.map((visa) => (
          <Allvisacard key={visa._id} Allvisa={visa} />
        ))}
      </div>
    </div>
  );
};

export default Allvisas;
