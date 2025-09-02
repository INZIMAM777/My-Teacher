import { NavLink } from "react-router-dom";

export const Header = () => {
//   const { user, removeSign } = useFirebase();

  const handleLogout = async () => {
    try {
      await removeSign();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 2rem;
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .logo {
            font-size: 1.8rem;
            font-weight: 800;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .logo a {
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .logo-icon {
            font-size: 2rem;
          }

          .nav-container {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .nav-links {
            display: flex;
            gap: 1.5rem;
            align-items: center;
          }

          .nav-links a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            padding: 0.5rem 0.8rem;
            border-radius: 6px;
            transition: all 0.3s ease;
            position: relative;
          }

          .nav-links a:hover {
            color: white;
            background: rgba(255, 255, 255, 0.1);
          }

          .nav-links a.active {
            color: white;
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
            background: #facc15;
            border-radius: 2px;
          }

          .add-btn {
            background: #facc15;
            color: #1e40af;
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
            box-shadow: 0 2px 8px rgba(250, 204, 21, 0.3);
          }

          .add-btn:hover {
            background: #eab308;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(250, 204, 21, 0.4);
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
            background: rgba(255, 255, 255, 0.1);
          }

          .profile-img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            object-fit: cover;
            transition: all 0.3s ease;
          }

          .profile-dropdown:hover .profile-img {
            border-color: white;
          }

          .profile-info {
            display: flex;
            flex-direction: column;
          }

          .profile-name {
            font-weight: 600;
            font-size: 0.9rem;
          }

          .profile-email {
            font-size: 0.8rem;
            opacity: 0.8;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            padding: 0.8rem 0;
            min-width: 200px;
            margin-top: 0.5rem;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
          }

          .profile-dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .dropdown-item {
            padding: 0.8rem 1.2rem;
            color: #374151;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.7rem;
            transition: all 0.2s ease;
          }

          .dropdown-item:hover {
            background: #f3f4f6;
            color: #2563eb;
          }

          .dropdown-divider {
            height: 1px;
            background: #e5e7eb;
            margin: 0.5rem 0;
          }

          .logout-btn {
            color: #ef4444;
            font-weight: 600;
          }

          .logout-btn:hover {
            background: #fef2f2;
          }

          .auth-buttons {
            display: flex;
            gap: 1rem;
          }

          .auth-btn {
            padding: 0.6rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .login-btn {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }

          .login-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: white;
          }

          .signup-btn {
            background: #facc15;
            color: #1e40af;
            border: 2px solid #facc15;
          }

          .signup-btn:hover {
            background: #eab308;
            border-color: #eab308;
            transform: translateY(-2px);
          }

          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .header {
              padding: 0.8rem 1rem;
            }

            .nav-links {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: #2563eb;
              flex-direction: column;
              padding: 1rem;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }

            .nav-links.active {
              display: flex;
            }

            .mobile-menu-btn {
              display: block;
            }

            .auth-buttons {
              flex-direction: column;
              gap: 0.5rem;
            }

            .profile-info {
              display: none;
            }
          }
        `}
      </style>

      <header className="header">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <span className="logo-icon">👨‍🏫</span>
            My-Teacher
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn">☰</button>

        {/* Navigation Links */}
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

          {/* User Section */}
          <div className="user-section">
            {user ? (
              // Logged In State
              <div className="profile-dropdown">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Profile"
                  className="profile-img"
                />
                <div className="profile-info">
                  <div className="profile-name">
                    {user.displayName || "User"}
                  </div>
                  <div className="profile-email">
                    {user.email}
                  </div>
                </div>
                
                {/* Dropdown Menu */}
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
              // Not Logged In State
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
      </header>
    </>
  );
};