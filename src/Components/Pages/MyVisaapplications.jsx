import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    if (!user?.email) return;
    const res = await fetch(`http://localhost:5000/applications?email=${user.email}`);
    const data = await res.json();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, [user]);

  const handleCancel = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this application?");
    if (!confirm) return;

    const res = await fetch(`http://localhost:5000/applications/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setApplications(applications.filter((app) => app._id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app._id} className="p-4 bg-white shadow rounded-lg">
              <img
                src={app.Country_image}
                alt={app.countryName}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{app.countryName}</h3>
              <p><strong>Visa Type:</strong> {app.Visa_type}</p>
              <p><strong>Processing Time:</strong> {app.Processing_time}</p>
              <p><strong>Fee:</strong> ${app.fee}</p>
              <p><strong>Validity:</strong> {app.Validity}</p>
              <p><strong>Application Method:</strong> {app.Application_method}</p>
              <p><strong>Applied Date:</strong> {app.appliedDate}</p>
              <p><strong>Applicant:</strong> {app.firstName} {app.lastName}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <button
                onClick={() => handleCancel(app._id)}
                className="btn btn-error w-full mt-2"
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
