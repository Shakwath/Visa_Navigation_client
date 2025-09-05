import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [editingVisa, setEditingVisa] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://visa-navigation-server.vercel.app/myvisas/${user.email}`)
        .then(res => res.json())
        .then(data => setVisas(data))
        .catch(err => console.error("Error fetching visas:", err));
    }
  }, [user]);

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this visa?")) return;
    const res = await fetch(`https://visa-navigation-server.vercel.app/myvisas/${id}`, { method: "DELETE" });
    if (res.ok) {
      setVisas(visas.filter(v => v._id !== id));
    }
  };

  // Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedVisa = {
      countryName: form.countryName.value,
      countryImage: form.countryImage.value,
      visaType: form.visaType.value,
      processingTime: form.processingTime.value,
      fee: form.fee.value,
      validity: form.validity.value,
      applicationMethod: form.applicationMethod.value,
    };

    const res = await fetch(`https://visa-navigation-server.vercel.app/myvisas/${editingVisa._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVisa),
    });

    if (res.ok) {
      setVisas(visas.map(v => v._id === editingVisa._id ? { ...v, ...updatedVisa } : v));
      setEditingVisa(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">My Added Visas</h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {visas.map(visa => (
          <div key={visa._id} className="bg-white shadow-xl p-4 rounded-xl flex flex-col">
            <img
              src={visa.countryImage || "https://via.placeholder.com/400x200?text=No+Image"}
              alt={visa.countryName || "Visa Country"}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg sm:text-xl font-semibold">{visa.countryName || "Unknown Country"}</h3>
            <p><strong>Visa Type:</strong> {visa.visaType}</p>
            <p><strong>Processing Time:</strong> {visa.processingTime}</p>
            <p><strong>Fee:</strong> ${visa.fee}</p>
            <p><strong>Validity:</strong> {visa.validity}</p>
            <p><strong>Application Method:</strong> {visa.applicationMethod}</p>

            <div className="flex gap-2 mt-3">
              <button onClick={() => setEditingVisa(visa)} className="btn btn-outline btn-warning flex-1">Update</button>
              <button onClick={() => handleDelete(visa._id)} className="btn btn-outline btn-error flex-1">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {editingVisa && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md sm:max-w-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Update Visa for {editingVisa.countryName}
            </h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input name="countryName" defaultValue={editingVisa.countryName} className="input input-bordered w-full" required />
              <input name="countryImage" placeholder="Enter Image URL" defaultValue={editingVisa.countryImage} className="input input-bordered w-full" required />
              <input name="visaType" placeholder="Enter visaType" defaultValue={editingVisa.visaType} className="input input-bordered w-full" required />
              <input name="processingTime" placeholder="Enter processing time" defaultValue={editingVisa.processingTime} className="input input-bordered w-full" required />
              <input name="fee" placeholder="Enter Fee" defaultValue={editingVisa.fee} className="input input-bordered w-full" required />
              <input name="validity" placeholder="Validity" defaultValue={editingVisa.validity} className="input input-bordered w-full" required />
              <input name="applicationMethod" placeholder="Enter applicationMethod" defaultValue={editingVisa.applicationMethod} className="input input-bordered w-full" required />
              
              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button type="button" onClick={() => setEditingVisa(null)} className="btn btn-outline btn-error w-full sm:w-auto">Cancel</button>
                <button type="submit" className="btn btn-outline btn-success w-full sm:w-auto">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
