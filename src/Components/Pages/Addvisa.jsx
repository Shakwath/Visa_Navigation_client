import { useState } from "react";

const visaFieldConfig = [
  { name: "countryImage", label: "Country Image URL", type: "text", placeholder: "Enter image URL" },
  { name: "countryName", label: "Country Name", type: "text", placeholder: "Enter country name" },
  { name: "visaType", label: "Visa Type", type: "select", options: ["Tourist visa", "Student visa", "Official visa"] },
  { name: "processingTime", label: "Processing Time", type: "text", placeholder: "e.g., 5-10 business days" },
  { name: "description", label: "Description", type: "textarea", placeholder: "Write description here..." },
  { name: "ageRestriction", label: "Age Restriction", type: "number" },
  { name: "fee", label: "Fee", type: "number" },
  { name: "validity", label: "Validity", type: "text", placeholder: "e.g., 6 months, 1 year" },
  { name: "applicationMethod", label: "Application Method", type: "text", placeholder: "e.g., Online, In-person at Embassy" },
];

const documentOptions = ["Valid passport", "Visa application form", "Recent passport-sized photograph"];

const AddVisa = () => {
  const initialState = visaFieldConfig.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {});
  initialState.requiredDocuments = [];

  const [visaData, setVisaData] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setVisaData((prev) => {
        const docs = prev.requiredDocuments;
        return checked
          ? { ...prev, requiredDocuments: [...docs, value] }
          : { ...prev, requiredDocuments: docs.filter((doc) => doc !== value) };
      });
    } else {
      setVisaData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Visa Data Submitted:", visaData);
    setMessage("Visa added successfully!");
    setVisaData(initialState);
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Visa</h2>
        <form onSubmit={handleSubmit}>
          {visaFieldConfig.map((field) => (
            <div className="mb-5" key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}:</label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={visaData[field.name]}
                  onChange={handleChange}
                  rows="3"
                  placeholder={field.placeholder || ""}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"
                  required
                />
              ) : field.type === "select" ? (
                <select
                  name={field.name}
                  value={visaData[field.name]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"
                  required
                >
                  <option value="">Select {field.label}</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={visaData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"
                  required
                />
              )}

              {field.name === "countryImage" && visaData.countryImage && (
                <img
                  src={visaData.countryImage}
                  alt="Country"
                  className="mt-3 w-32 h-20 object-cover rounded-md border"
                />
              )}
            </div>
          ))}

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Required Documents:</label>
            <div className="flex flex-wrap gap-3">
              {documentOptions.map((doc) => (
                <label key={doc} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="requiredDocuments"
                    value={doc}
                    checked={visaData.requiredDocuments.includes(doc)}
                    onChange={handleChange}
                    className="mr-2 accent-purple-500 w-4 h-4"
                  />
                  {doc}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg transition duration-300 ease-in-out"
          >
            Add Visa
          </button>

          {message && (
            <div className="mt-4 text-center text-green-600 font-medium text-lg">{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
