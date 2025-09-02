import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AddTeacher } from "../../pages/AddTeacher";

export const Header = () => {
  const [showAddTeacher, setShowAddTeacher] = useState(false);

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
            T
          }

          .nav-links {
            display: flex;
            gap: 20px;
            align-items: center;
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

          .add-btn {
            background: #facc15; /* Yellow */
            border: none;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
          }

          .add-btn:hover {
            background: #eab308;
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

          .form-container {
            padding: 20px;
            background: #f9f9f9;
          }
        `}
      </style>

      <header className="header">
        {/* Logo */}
        <div className="logo"><NavLink to="/" >
            My-Teacher
          </NavLink></div>
        

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>

          {/* Add Teacher Button */}
          <button className="add-btn" onClick={() => setShowAddTeacher(!showAddTeacher)}>
            {showAddTeacher ? "Close" : "Add Teacher"}
          </button>
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

      {/* Add Teacher Form */}
      {showAddTeacher && (
        <div className="form-container">
          <AddTeacher />
        </div>
      )}
    </>
  );
};
