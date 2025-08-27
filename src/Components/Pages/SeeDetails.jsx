import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";

const SeeDetails = () => {
  const visa = useLoaderData(); 
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0];

  const handleApply = async (e) => {
    e.preventDefault();

    const form = e.target;
    const applicationData = {
      visaId: visa._id,
      email: user?.email,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      appliedDate: form.appliedDate.value,
      fee: visa.fee,
    };

    // send data to backend
    const res = await fetch("http://localhost:5000/applications", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    });

    if (res.ok) {
      alert("Visa Applied Successfully!");
      setShowModal(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <img src={visa.countryImage} alt={visa.countryName} className="w-full h-60 object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold">{visa.countryName}</h2>
      <p className="mt-2"><strong>Visa Type:</strong> {visa.visaType}</p>
      <p><strong>Processing Time:</strong> {visa.processingTime}</p>
      <p><strong>Fee:</strong> ${visa.fee}</p>
      <p><strong>Validity:</strong> {visa.validity}</p>
      <p><strong>Description:</strong> {visa.description}</p>

      <button
        onClick={() => setShowModal(true)}
        className="btn btn-warning mt-4 w-full">
        Apply for the visa
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h3 className="text-lg font-semibold mb-4">Apply for {visa.countryName}</h3>
            <form onSubmit={handleApply} className="space-y-3">
              <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
              <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" required />
              <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" required />
              <input type="text" name="appliedDate" value={currentDate} readOnly className="input input-bordered w-full" />
              <input type="text" value={`$${visa.fee}`} readOnly className="input input-bordered w-full" />
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-ghost">Cancel</button>
                <button type="submit" className="btn btn-success">Apply</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeDetails;
