import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../Components/Firebase.init';

const ForgetPassword = () => {
  const location = useLocation();
  const preEmail = location.state?.email || '';
  const [email, setEmail] = useState(preEmail);
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Reset email sent! Redirecting to Gmail…');
      // Wait a moment then redirect:
      setTimeout(() => {
        window.location.href = 'https://mail.google.com';
      }, 1500);
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-20 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Your email"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Reset Password
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default ForgetPassword;