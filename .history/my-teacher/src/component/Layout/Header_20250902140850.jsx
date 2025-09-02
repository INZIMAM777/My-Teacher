import { useState } from "react";
import { AddTeacher } from "./AddTeacher"; // import AddTeacher form

export const Header = () => {
  const [showAddTeacher, setShowAddTeacher] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">My-Teacher</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#profile">Profile</a>
          <button
            className="add-btn"
            onClick={() => setShowAddTeacher(!showAddTeacher)}
          >
            {showAddTeacher ? "Close" : "Add Teacher"}
          </button>
        </nav>
      </header>

      {showAddTeacher && (
        <div className="form-container">
          <AddTeacher />
        </div>
      )}

      <style>{`
        .header {
          background: #333;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 22px;
          font-weight: bold;
        }
        .nav a, .add-btn {
          margin: 0 12px;
          color: white;
          text-decoration: none;
          font-size: 16px;
          cursor: pointer;
        }
        .add-btn {
          background: #007bff;
          border: none;
          padding: 8px 14px;
          border-radius: 5px;
        }
        .add-btn:hover {
          background: #0056b3;
        }
        .form-container {
          padding: 20px;
          background: #f9f9f9;
        }
      `}</style>
    </>
  );
};
