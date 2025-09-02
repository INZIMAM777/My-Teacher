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
            --primary: #bb86fc;
            --secondary: #985eff;
            --success: #03dac6;
            --danger: #cf6679;
            --warning: #ffb74d;
            --light: #2c2c2c;
            --dark: #e0e0e0;
            --gray: #a0a0a0;
            --light-gray: #333333;
            --card-bg: #1e1e1e;
            --body-bg: #121212;
          }

          .profile-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }

          .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
          }

          .page-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--dark);
            margin: 0;
          }

          .btn {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }

          .btn-primary {
            background-color: var(--primary);
            color: #121212;
          }

          .btn-primary:hover {
            background-color: var(--secondary);
          }

          .btn-secondary {
            background-color: var(--light-gray);
            color: var(--dark);
          }

          .btn-secondary:hover {
            background-color: #444444;
          }

          .profile-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 30px;
            margin-bottom: 30px;
          }

          .profile-card {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border: 1px solid #333;
            text-align: center;
          }

          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--primary);
            margin: 0 auto 20px;
          }

          .profile-name {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--dark);
            margin: 0 0 10px 0;
          }

          .profile-email {
            color: var(--gray);
            margin: 0 0 20px 0;
          }

          .profile-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
          }

          .stat-item {
            text-align: center;
            padding: 15px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 8px;
          }

          .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0;
          }

          .stat-label {
            color: var(--gray);
            margin: 5px 0 0 0;
            font-size: 0.9rem;
          }

          .profile-form {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border: 1px solid #333;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            display: block;
            margin-bottom: 8px;
            color: var(--dark);
            font-weight: 500;
          }

          .form-input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            background-color: #2c2c2c;
            color: #e0e0e0;
          }

          .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }

          .message {
            padding: 12px 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
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

          .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(187, 134, 252, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary);
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .not-signed-in {
            text-align: center;
            padding: 60px 20px;
            color: var(--gray);
          }

          .not-signed-in-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }

          .not-signed-in h2 {
            color: var(--dark);
            margin: 0 0 10px 0;
          }

          .not-signed-in p {
            margin: 0 0 30px 0;
          }

          @media (max-width: 768px) {
            .profile-container {
              padding: 15px;
            }

            .page-header {
              flex-direction: column;
              align-items: stretch;
              margin-bottom: 20px;
            }

            .page-title {
              font-size: 1.8rem;
              text-align: center;
            }

            .profile-content {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .profile-card {
              padding: 20px;
            }

            .profile-image {
              width: 100px;
              height: 100px;
            }

            .profile-stats {
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
            }

            .profile-form {
              padding: 20px;
            }

            .form-input {
              padding: 14px;
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .page-title {
              font-size: 1.5rem;
            }

            .profile-stats {
              grid-template-columns: 1fr;
            }

            .btn {
              width: 100%;
              justify-content: center;
            }
              .form-input{
                width: 90%;}
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
            </div>
          </div>

          <div className="profile-form">
            <h2 style={{ marginTop: 0, marginBottom: '25px', color: 'var(--dark)' }}>Edit Profile</h2>
            
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
                <small style={{ color: 'var(--gray)', fontSize: '0.8rem' }}>Email cannot be changed</small>
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
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%' }}
              >
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Updating...
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