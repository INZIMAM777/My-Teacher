import { NavLink } from "react-router-dom";
import { useFirebase } from "../../context/MyTeacher";
import { useState } from "react";

export const Header = () => {
  const { user, removeSign } = useFirebase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await removeSign();
      console.log("User logged out successfully");
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 1.5rem;
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
            color: #e0e0e0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid #333;
          }

          .logo {
            font-size: 1.6rem;
            font-weight: 800;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            z-index: 1001;
          }

          .logo a {
            color: #bb86fc;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .logo-icon {
            font-size: 1.8rem;
          }

          .nav-container {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }

          .nav-links {
            display: flex;
            gap: 1.2rem;
            align-items: center;
          }

          .nav-links a {
            color: rgba(224, 224, 224, 0.8);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            padding: 0.5rem 0.8rem;
            border-radius: 6px;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-links a:hover {
            color: #bb86fc;
            background: rgba(187, 134, 252, 0.1);
          }

          .nav-links a.active {
            color: #bb86fc;
            font-weight: 600;
          }

          .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 3px;
            background: #03dac6;
            border-radius: 2px;
          }

          .add-btn {
            background: #03dac6;
            color: #121212;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 2px 12px rgba(3, 218, 198, 0.4);
          }

          .add-btn:hover {
            background: #00c9b3;
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(3, 218, 198, 0.6);
          }

          .user-section {
            display: flex;
            align-items: center;
            gap: 1rem;
            position: relative;
          }

          .profile-dropdown {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            cursor: pointer;
            padding: 0.5rem 0.8rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .profile-dropdown:hover {
            background: rgba(187, 134, 252, 0.1);
          }

          .profile-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(187, 134, 252, 0.3);
            object-fit: cover;
            transition: all 0.3s ease;
            background: linear-gradient(45deg, #bb86fc, #03dac6);
          }

          .profile-dropdown:hover .profile-img {
            border-color: #bb86fc;
            transform: scale(1.05);
          }

          .profile-info {
            display: flex;
            flex-direction: column;
          }

          .profile-name {
            font-weight: 600;
            font-size: 0.9rem;
            color: #e0e0e0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 120px;
          }

          .profile-email {
            font-size: 0.75rem;
            opacity: 0.8;
            color: #a0a0a0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 120px;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: #1e1e1e;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
            padding: 0.8rem 0;
            min-width: 200px;
            margin-top: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            border: 1px solid #333;
            z-index: 1000;
          }

          .profile-dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .dropdown-item {
            padding: 0.8rem 1.2rem;
            color: #e0e0e0;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            transition: all 0.2s ease;
            width: 100%;
            border: none;
            background: none;
            text-align: left;
            cursor: pointer;
            font-size: 0.9rem;
          }

          .dropdown-item:hover {
            background: rgba(187, 134, 252, 0.1);
            color: #bb86fc;
          }

          .dropdown-divider {
            height: 1px;
            background: #333;
            margin: 0.5rem 0;
          }

          .logout-btn {
            color: #cf6679;
            font-weight: 600;
          }

          .logout-btn:hover {
            background: rgba(207, 102, 121, 0.1);
          }

          .auth-buttons {
            display: flex;
            gap: 0.8rem;
          }

          .auth-btn {
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.9rem;
          }

          .login-btn {
            background: transparent;
            color: #e0e0e0;
            border: 2px solid rgba(187, 134, 252, 0.3);
          }

          .login-btn:hover {
            background: rgba(187, 134, 252, 0.1);
            border-color: #bb86fc;
          }

          .signup-btn {
            background: #03dac6;
            color: #121212;
            border: 2px solid #03dac6;
          }

          .signup-btn:hover {
            background: #00c9b3;
            border-color: #00c9b3;
            transform: translateY(-2px);
          }

          /* Mobile Menu Button */
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #e0e0e0;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
            transition: all 0.3s ease;
            z-index: 1001;
          }

          .mobile-menu-btn:hover {
            background: rgba(187, 134, 252, 0.1);
          }

          /* Mobile Navigation */
          .mobile-nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(10, 10, 10, 0.95);
            z-index: 999;
            padding: 5rem 2rem 2rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .mobile-nav.open {
            transform: translateX(0);
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .mobile-nav-links a {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
            padding: 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .mobile-nav-links a:hover {
            background: rgba(187, 134, 252, 0.1);
            color: #bb86fc;
          }

          .mobile-nav-links a.active {
            color: #bb86fc;
            background: rgba(187, 134, 252, 0.15);
          }

          .close-menu-btn {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: none;
            border: none;
            color: #e0e0e0;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .close-menu-btn:hover {
            background: rgba(207, 102, 121, 0.1);
            color: #cf6679;
          }

          .mobile-user-section {
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid #333;
          }

          .mobile-profile {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .mobile-profile-img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 2px solid #bb86fc;
            object-fit: cover;
            background: linear-gradient(45deg, #bb86fc, #03dac6);
          }

          .mobile-profile-info {
            display: flex;
            flex-direction: column;
          }

          .mobile-profile-name {
            font-weight: 600;
            font-size: 1.1rem;
            color: #e0e0e0;
          }

          .mobile-profile-email {
            font-size: 0.9rem;
            color: #a0a0a0;
          }

          .mobile-auth-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 2rem;
          }

          .mobile-auth-btn {
            padding: 1rem;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            font-size: 1.1rem;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .nav-links {
              gap: 0.8rem;
            }
            
            .profile-info {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .header {
              padding: 0.8rem 1rem;
            }

            .logo {
              font-size: 1.4rem;
            }

            .logo-icon {
              font-size: 1.6rem;
            }

            .nav-links {
              display: none;
            }

            .auth-buttons {
              display: none;
            }

            .profile-dropdown {
              display: none;
            }

            .mobile-menu-btn {
              display: block;
            }

            .mobile-nav {
              display: block;
            }

            .user-section.mobile-visible {
              display: block;
            }
          }

          @media (max-width: 480px) {
            .header {
              padding: 0.6rem 0.8rem;
            }

            .logo {
              font-size: 1.2rem;
            }

            .logo-icon {
              font-size: 1.4rem;
            }

            .mobile-nav {
              padding: 4rem 1.5rem 1.5rem;
            }

            .mobile-nav-links a {
              font-size: 1.1rem;
              padding: 0.8rem;
            }

            .mobile-profile-img {
              width: 50px;
              height: 50px;
            }

            .mobile-profile-name {
              font-size: 1rem;
            }

            .mobile-profile-email {
              font-size: 0.8rem;
            }
          }

          /* Animation for mobile menu */
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-nav-links a {
            animation: slideIn 0.3s ease forwards;
          }

          .mobile-nav-links a:nth-child(1) { animation-delay: 0.1s; }
          .mobile-nav-links a:nth-child(2) { animation-delay: 0.2s; }
          .mobile-nav-links a:nth-child(3) { animation-delay: 0.3s; }
          .mobile-nav-links a:nth-child(4) { animation-delay: 0.4s; }
        `}
      </style>

      <header className="header">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMobileMenu}>
            <span className="logo-icon">👨‍🏫</span>
            MyTeacher
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-container">
          <nav className="nav-links">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
            {user && (
              <NavLink to="/teachers" className={({ isActive }) => (isActive ? "active" : "")}>
                Teachers
              </NavLink>
            )}
          </nav>

          {/* Desktop User Section */}
          <div className="user-section">
            {user ? (
              <div className="profile-dropdown">
                <img
                  src={user.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"}
                  alt="User Profile"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNiYjg2ZmMiLz4KPHBhdGggZD0iTTIwIDEwQzIyLjIwOTEgMTAgMjQgMTEuNzkwOSAyNCAxNEMyNCAxNi4yMDkxIDIyLjIwOTEgMTggMjAgMThDMTcuNzkwOSAxOCAxNiAxNi4yMDkxIDE2IDE0QzE2IDExLjc5MDkgMTcuNzkwOSAxMCAyMCAxMFoiIGZpbGw9IiMxMjEyMTIiLz4KPHBhdGggZD0iTTIwIDIyQzI0LjQxODMgMjIgMjggMjUuNTgxNyAyOCAzMEgxMkMxMiAyNS41ODE3IDE1LjU4MTcgMjIgMjAgMjJaIiBmaWxsPSIjMTIxMjEyIi8+Cjwvc3ZnPgo=";
                  }}
                />
                <div className="profile-info">
                  <div className="profile-name">
                    {user.displayName || "User"}
                  </div>
                  <div className="profile-email">
                    {user.email}
                  </div>
                </div>
                
                <div className="dropdown-menu">
                  <NavLink to="/profile" className="dropdown-item">
                    <span>👤</span> Profile
                  </NavLink>
                  <NavLink to="/settings" className="dropdown-item">
                    <span>⚙️</span> Settings
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <button onClick={handleLogout} className="dropdown-item logout-btn">
                    <span>🚪</span> Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <NavLink to="/login" className="auth-btn login-btn">
                  Login
                </NavLink>
                <NavLink to="/register" className="auth-btn signup-btn">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          
          <nav className="mobile-nav-links">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>
              <span>📚</span> About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>
              <span>📞</span> Contact
            </NavLink>
            {user && (
              <NavLink to="/teachers" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMobileMenu}>
                <span>👨‍🏫</span> Teachers
              </NavLink>
            )}
          </nav>

          {/* Mobile User Section */}
          <div className="mobile-user-section">
            {user ? (
              <>
                <div className="mobile-profile">
                  <img
                    src={user.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face"}
                    alt="User Profile"
                    className="mobile-profile-img"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNiYjg2ZmMiLz4KPHBhdGggZD0iTTMwIDE1QzM0LjQxODMgMTUgMzggMTguNTgxNyAzOCAyM0MzOCAyNy40MTgzIDM0LjQxODMgMzEgMzAgMzFDMjUuNTgxNyAzMSAyMiAyNy40MTgzIDIyIDIzQzIyIDE4LjU4MTcgMjUuNTgxNyAxNSAzMCAxNVoiIGZpbGw9IiMxMjEyMTIiLz4KPHBhdGggZD0iTTMwIDMzQzM2LjYyNzQgMzMgNDIgMzguMzcyNiA0MiA0NUgxOEMxOCAzOC4zNzI2IDIzLjM3MjYgMzMgMzAgMzNaIiBmaWxsPSIjMTIxMjEyIi8+Cjwvc3ZnPgo=";
                    }}
                  />
                  <div className="mobile-profile-info">
                    <div className="mobile-profile-name">
                      {user.displayName || "User"}
                    </div>
                    <div className="mobile-profile-email">
                      {user.email}
                    </div>
                  </div>
                </div>
                
                <NavLink to="/profile" className="dropdown-item" onClick={closeMobileMenu}>
                  <span>👤</span> Profile
                </NavLink>
                <NavLink to="/settings" className="dropdown-item" onClick={closeMobileMenu}>
                  <span>⚙️</span> Settings
                </NavLink>
                <div className="dropdown-divider"></div>
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <span>🚪</span> Logout
                </button>
              </>
            ) : (
              <div className="mobile-auth-buttons">
                <NavLink to="/login" className="mobile-auth-btn login-btn" onClick={closeMobileMenu}>
                  Login
                </NavLink>
                <NavLink to="/register" className="mobile-auth-btn signup-btn" onClick={closeMobileMenu}>
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};