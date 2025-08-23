import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Mainlayout = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <div className="min-h-[calc(100vh-232px)] py-12">
        <Outlet /> {/* Nested routes render here */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainlayout;
