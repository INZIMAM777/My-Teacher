import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        My-Teacher
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* User Profile */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="font-medium">Profile</span>
      </div>
    </header>
  );
};
