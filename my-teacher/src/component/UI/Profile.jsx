// Profile.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/MyTeacher";

export const Profile = () => {
  const { user, updateUserProfile } = useFirebase();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
    email: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
        email: user.email || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await updateUserProfile({
        displayName: formData.displayName,
        photoURL: formData.photoURL
      });
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage({ type: 'error', text: 'Failed to update profile. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="page-header">
          <h1 className="page-title">Profile</h1>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
        <div className="not-signed-in">
          <div className="not-signed-in-icon">🔒</div>
          <h2>Please sign in to view your profile</h2>
          <p>You need to be logged in to access your profile information.</p>
          <button className="btn btn-primary" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          :root {
            --primary-dark: #121212;
            --secondary-dark: #1e1e1e;
            --accent-purple: #bb86fc;
            --accent-teal: #03dac6;
            --text-light: #e0e0e0;
            --text-secondary: #a0a0a0;
            --card-surface: #1e1e1e;
            --border-color: #2d2d2d;
            --success: #03dac6;
            --danger: #cf6679;
            --warning: #ffb74d;
            --light-gray: #333333;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            background-color: var(--primary-dark);
          }
          
          .profile-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          /* Header Section */
          .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding: 20px;
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #2d2d2d 100%);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .page-title {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--accent-teal);
            margin: 0;
          }
          
          .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          
          .btn-primary {
            background-color: var(--accent-purple);
            color: var(--primary-dark);
            box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
          }
          
          .btn-primary:hover {
            background-color: var(--accent-teal);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(3, 218, 198, 0.4);
          }
          
          .btn-secondary {
            background-color: var(--light-gray);
            color: var(--text-light);
          }
          
          .btn-secondary:hover {
            background-color: #444444;
            transform: translateY(-2px);
          }
          
          .btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none !important;
          }
          
          /* Profile Content */
          .profile-content {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 30px;
            margin-bottom: 30px;
          }
          
          /* Profile Card */
          .profile-card {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            text-align: center;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
            height: fit-content;
          }
          
          .profile-card:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-purple);
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--accent-purple);
            margin: 0 auto 20px;
            box-shadow: 0 5px 15px rgba(187, 134, 252, 0.3);
          }
          
          .profile-name {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-teal);
            margin: 0 0 10px 0;
            overflow: visible;
          }
          
          .profile-email {
            color: var(--text-secondary);
            margin: 0 0 25px 0;
            font-size: 1.1rem;
            overflow: visible;
          }
          
          .profile-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 25px;
          }
          
          .stat-item {
            text-align: center;
            padding: 15px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(187, 134, 252, 0.2);
          }
          
          .stat-value {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--accent-purple);
            margin: 0;
            line-height: 1.2;
          }
          
          .stat-label {
            color: var(--text-secondary);
            margin: 8px 0 0 0;
            font-size: 0.9rem;
          }
          
          /* Profile Form */
          .profile-form {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
          }
          
          .profile-form:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-teal);
          }
          
          .form-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-teal);
            margin: 0 0 25px 0;
            text-align: center;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 10px;
            color: var(--text-light);
            font-weight: 500;
            font-size: 1.1rem;
          }
          
          .form-input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--border-color);
            border-radius: 12px;
            font-size: 1rem;
            transition: all 0.3s;
            background-color: var(--secondary-dark);
            color: var(--text-light);
          }
          
          .form-input:focus {
            outline: none;
            border-color: var(--accent-purple);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }
          
          .form-input:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          
          .form-hint {
            display: block;
            color: var(--text-secondary);
            margin-top: 8px;
            font-size: 0.85rem;
          }
          
          /* Messages */
          .message {
            padding: 14px 18px;
            border-radius: 12px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
          }
          
          .message-success {
            background-color: rgba(3, 218, 198, 0.1);
            color: var(--success);
            border: 1px solid rgba(3, 218, 198, 0.3);
          }
          
          .message-error {
            background-color: rgba(207, 102, 121, 0.1);
            color: var(--danger);
            border: 1px solid rgba(207, 102, 121, 0.3);
          }
          
          /* Loading Spinner */
          .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(187, 134, 252, 0.3);
            border-radius: 50%;
            border-top-color: var(--accent-purple);
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* Not Signed In */
          .not-signed-in {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            border-radius: 16px;
            margin-top: 30px;
            border: 1px solid var(--border-color);
          }
          
          .not-signed-in-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }
          
          .not-signed-in h2 {
            color: var(--accent-teal);
            margin: 0 0 15px 0;
            font-size: 1.8rem;
          }
          
          .not-signed-in p {
            margin: 0 0 30px 0;
            font-size: 1.1rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Responsive Design */
          @media (max-width: 1024px) {
            .profile-container {
              padding: 20px 16px;
            }
            
            .page-title {
              font-size: 2rem;
            }
            
            .profile-content {
              gap: 20px;
            }
            
            .profile-card,
            .profile-form {
              padding: 25px;
            }
          }
          
          @media (max-width: 768px) {
            .page-header {
              flex-direction: column;
              align-items: stretch;
              text-align: center;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
            }
            
            .profile-content {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .profile-card {
              padding: 20px;
            }
            
            .profile-image {
              width: 120px;
              height: 120px;
            }
            
            .profile-name {
              font-size: 1.5rem;
            }
            
            .profile-stats {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            
            .stat-value {
              font-size: 1.5rem;
            }
            
            .profile-form {
              padding: 20px;
            }
            
            .form-title {
              font-size: 1.5rem;
            }
            
            .form-input {
              padding: 12px;
            }
            
            .btn {
              width: 100%;
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .page-title {
              font-size: 1.6rem;
            }
            
            .profile-stats {
              grid-template-columns: 1fr;
            }
            
            .profile-image {
              width: 100px;
              height: 100px;
            }
            
            .profile-name {
              font-size: 1.3rem;
            }
            
            .not-signed-in {
              padding: 40px 15px;
            }
            
            .not-signed-in-icon {
              font-size: 3rem;
            }
            
            .not-signed-in h2 {
              font-size: 1.4rem;
            }
            
            .not-signed-in p {
              font-size: 1rem;
            }
          }
          
          /* Animation for cards */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .profile-card,
          .profile-form {
            animation: fadeInUp 0.6s ease forwards;
          }
          
          /* Improved touch targets for mobile */
          @media (hover: none) {
            .profile-card:hover,
            .profile-form:hover {
              transform: none;
            }
            
            .btn {
              min-height: 48px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .profile-card,
            .profile-form {
              animation: none;
            }
            
            .btn:hover {
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <div className="profile-container">
        <div className="page-header">
          <h1 className="page-title">Profile</h1>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              alt="Profile"
              className="profile-image"
              onError={(e) => {
                e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
              }}
            />
            <h2 className="profile-name">{user.displayName || "User"}</h2>
            <p className="profile-email">{user.email}</p>
            
            <div className="profile-stats">
              <div className="stat-item">
                <p className="stat-value">12</p>
                <p className="stat-label">Teachers</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">5</p>
                <p className="stat-label">Subjects</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">24</p>
                <p className="stat-label">Sessions</p>
              </div>
              <div className="stat-item">
                <p className="stat-value">98%</p>
                <p className="stat-label">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="profile-form">
            <h2 className="form-title">Edit Profile</h2>
            
            {message.text && (
              <div className={`message message-${message.type}`}>
                <span>{message.type === 'success' ? '✅' : '❌'}</span>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Display Name</label>
                <input
                  type="text"
                  name="displayName"
                  className="form-input"
                  value={formData.displayName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled
                />
                <span className="form-hint">Email cannot be changed</span>
              </div>

              <div className="form-group">
                <label className="form-label">Profile Photo URL</label>
                <input
                  type="url"
                  name="photoURL"
                  className="form-input"
                  value={formData.photoURL}
                  onChange={handleChange}
                  placeholder="Paste image URL here"
                />
                <span className="form-hint">Provide a direct link to your profile image</span>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', marginTop: '10px' }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Updating Profile...
                  </>
                ) : (
                  "Update Profile"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};