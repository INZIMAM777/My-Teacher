import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            background-color: #2563eb; /* Blue */
            color: white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          }

          .logo {
            font-size: 24px;
            font-weight: bold;
          }

          .nav-links {
            display: flex;
            gap: 20px;
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 16px;
          }

          .nav-links a:hover {
            text-decoration: underline;
          }

          .nav-links .active {
            font-weight: bold;
            text-decoration: underline;
          }

          .profile {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
          }

          .profile img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid white;
          }
        `}
      </style>

      <header className="header">
        {/* Logo */}
        <div className="logo">My-Teacher</div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        {/* User Profile */}
        <div className="profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
          />
          <span>Profile</span>
        </div>
      </header>
    </>
  );
};
