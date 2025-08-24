import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">
      {/* Error Image */}
      <img
        src="https://i.ibb.co.com/mCBdmfTn/404-error.jpg"
        alt="404 Illustration"
        className="w-72 md:w-96 mb-6"
      />

      <h1 className="text-9xl font-extrabold text-primary">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">Oops! Page not found</p>
      <p className="mt-2 text-base-content/70">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-4">
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link to="/all-visas" className="btn btn-outline">
          Browse Visas
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
