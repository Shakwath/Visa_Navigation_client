import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const MyVisaapplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/applications/${user.email}`)
        .then(res => res.json())
        .then(data => setApplications(data));
    }
  }, [user]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Visa Applications</h2>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map(app => (
            <div key={app._id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold">{app.firstName} {app.lastName}</h3>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Date:</strong> {app.appliedDate}</p>
              <p><strong>Fee:</strong> ${app.fee}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaapplications;
