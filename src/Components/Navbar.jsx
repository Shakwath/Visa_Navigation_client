import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Left Section */}
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://i.ibb.co.com/G4RZdhRT/logo.jpg"
            alt="Visa Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-xl">Visa Navigation</span>
        </Link>
      </div>

      {/* Center Section */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-visas">All Visas</Link></li>
          <li><Link to="/addvisa">My Added Visa</Link></li>
          <li><Link to="/my-visa-applications">My Visa Applications</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-none">
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-visas">All Visas</Link></li>
          <li><Link to="/addvisa">My Added Visa</Link></li>
          <li><Link to="/my-visa-applications">My Visa Applications</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
