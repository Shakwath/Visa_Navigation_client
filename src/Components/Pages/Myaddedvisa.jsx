import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [editingVisa, setEditingVisa] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myvisas/${user.email}`)
        .then(res => res.json())
        .then(data => setVisas(data))
        .catch(err => console.error("Error fetching visas:", err));
    }
  }, [user]);

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this visa?")) return;
    const res = await fetch(`http://localhost:5000/myvisas/${id}`, { method: "DELETE" });
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

    const res = await fetch(`http://localhost:5000/myvisas/${editingVisa._id}`, {
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
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Added Visas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map(visa => (
          <div key={visa._id} className="card bg-white shadow-xl p-4 rounded-xl">
            <img
              src={visa.countryImage || "https://via.placeholder.com/400x200?text=No+Image"}
              alt={visa.countryName || "Visa Country"}
              className="h-40 w-full object-cover rounded-lg mb-3"/>
            <h3 className="text-xl font-semibold">{visa.countryName || "Unknown Country"}</h3>
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h3 className="text-lg font-semibold mb-4">Update Visa for {editingVisa.countryName}</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input name="countryName" defaultValue={editingVisa.countryName} className="input input-bordered w-full" required />
              <input name="countryImage" placeholder="Enter Image URL" defaultValue={editingVisa.countryImage} className="input input-bordered w-full" required />
              <input name="visaType" placeholder="Enter visaType" defaultValue={editingVisa.visaType} className="input input-bordered w-full" required />
              <input name="processingTime" placeholder="Enter processing time" defaultValue={editingVisa.processingTime} className="input input-bordered w-full" required />
              <input name="fee" placeholder="Enter Fee" defaultValue={editingVisa.fee} className="input input-bordered w-full" required />
              <input name="validity" placeholder="Validity" defaultValue={editingVisa.validity} className="input input-bordered w-full" required />
              <input name="applicationMethod" placeholder="Enter applicationMethod" defaultValue={editingVisa.applicationMethod} className="input input-bordered w-full" required />
              <div className="flex gap-2 justify-end">
                <button type="button" onClick={() => setEditingVisa(null)} className="btn btn-outline btn-error">Cancel</button>
                <button type="submit" className="btn btn-outline btn-success">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
