import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>;
    }

    return children;
};

export default PrivateRoute;