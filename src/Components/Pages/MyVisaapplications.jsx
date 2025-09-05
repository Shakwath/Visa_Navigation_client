import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const fetchApplications = async () => {
    if (!user?.email) return;
    const res = await fetch(
      `https://visa-navigation-server.vercel.app/applications?email=${user.email}`
    );
    const data = await res.json();
    setApplications(data);
    setFiltered(data); // initialize filtered list
  };

  useEffect(() => {
    fetchApplications();
  }, [user]);

  const handleCancel = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this application?"
    );
    if (!confirm) return;

    const res = await fetch(`https://visa-navigation-server.vercel.app/applications/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const updated = applications.filter((app) => app._id !== id);
      setApplications(updated);
      setFiltered(updated);
    }
  };

  // ✅ Search handler
  const handleSearch = () => {
    if (!search.trim()) {
      setFiltered(applications); // show all if empty
    } else {
      setFiltered(
        applications.filter((app) =>
          app.countryName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>

      {/* ✅ Search box */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search by country name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full"
        />
        <button onClick={handleSearch} className="btn btn-warning">
          Search
        </button>
      </div>

      {filtered.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((app) => (
            <div key={app._id} className="p-4 bg-white shadow rounded-lg">
              <img
                src={app.Country_image}
                alt={app.countryName}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{app.countryName}</h3>
              <p>
                <strong>Visa Type:</strong> {app.Visa_type}
              </p>
              <p>
                <strong>Processing Time:</strong> {app.Processing_time}
              </p>
              <p>
                <strong>Fee:</strong> ${app.fee}
              </p>
              <p>
                <strong>Validity:</strong> {app.Validity}
              </p>
              <p>
                <strong>Application Method:</strong> {app.Application_method}
              </p>
              <p>
                <strong>Applied Date:</strong> {app.appliedDate}
              </p>
              <p>
                <strong>Applicant:</strong> {app.firstName} {app.lastName}
              </p>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              <button
                onClick={() => handleCancel(app._id)}
                className="btn btn-outline btn-error w-full mt-2"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;
