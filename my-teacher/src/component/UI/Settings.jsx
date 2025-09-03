// Settings.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/MyTeacher";

export const Settings = () => {
  const { user } = useFirebase();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    language: "en",
    autoSave: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Simulate saving settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Settings saved successfully!' });
    } catch (error) {
      console.error("Error saving settings:", error);
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="settings-container">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>
        <div className="not-signed-in">
          <div className="not-signed-in-icon">🔒</div>
          <h2>Please sign in to access settings</h2>
          <p>You need to be logged in to modify your settings.</p>
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
          
          .settings-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
          }
          
          /* Header Section */
          .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding: 24px;
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #2d2d2d 100%);
            border-radius: 16px;
            color: var(--text-light);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
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
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
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
            background-color: transparent;
            color: var(--text-light);
            border: 1px solid var(--border-color);
          }
          
          .btn-secondary:hover {
            background-color: rgba(255, 255, 255, 0.05);
            border-color: var(--accent-purple);
          }
          
          .settings-content {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
          }
          
          .settings-section {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
          }
          
          .settings-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .settings-section h2 {
            color: var(--accent-teal);
            margin: 0 0 20px 0;
            font-size: 1.5rem;
            font-weight: 700;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 8px;
            color: var(--text-light);
            font-weight: 500;
          }
          
          .form-input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
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
          
          .form-select {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-size: 1rem;
            background-color: var(--secondary-dark);
            color: var(--text-light);
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 15px center;
            background-size: 16px;
          }
          
          .form-select:focus {
            outline: none;
            border-color: var(--accent-purple);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }
          
          .checkbox-group {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
          }
          
          .checkbox-input {
            width: 22px;
            height: 22px;
            border-radius: 6px;
            border: 2px solid var(--border-color);
            background-color: var(--secondary-dark);
            appearance: none;
            position: relative;
            cursor: pointer;
            transition: all 0.3s;
          }
          
          .checkbox-input:checked {
            background-color: var(--accent-purple);
            border-color: var(--accent-purple);
          }
          
          .checkbox-input:checked::after {
            content: '✓';
            position: absolute;
            color: var(--primary-dark);
            font-size: 14px;
            font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          
          .checkbox-label {
            color: var(--text-light);
            cursor: pointer;
            user-select: none;
            font-weight: 500;
          }
          
          .message {
            padding: 14px 16px;
            border-radius: 8px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 10px;
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
          
          .not-signed-in {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
          }
          
          .not-signed-in-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }
          
          .not-signed-in h2 {
            color: var(--accent-teal);
            margin: 0 0 10px 0;
            font-size: 1.8rem;
          }
          
          .not-signed-in p {
            margin: 0 0 30px 0;
            font-size: 1.1rem;
          }
          
          /* Enhanced Mobile Responsiveness */
          @media (max-width: 1024px) {
            .settings-container {
              padding: 20px 16px;
            }
            
            .page-title {
              font-size: 2rem;
            }
          }
          
          @media (max-width: 768px) {
            .page-header {
              flex-direction: column;
              align-items: stretch;
              margin-bottom: 30px;
              padding: 20px;
            }
            
            .page-title {
              font-size: 1.8rem;
              text-align: center;
              margin-bottom: 15px;
            }
            
            .settings-content {
              padding: 24px;
            }
            
            .settings-section h2 {
              font-size: 1.3rem;
            }
            
            .form-input, .form-select {
              padding: 16px;
              font-size: 16px;
            }
          }
          
          @media (max-width: 480px) {
            .page-title {
              font-size: 1.6rem;
            }
            
            .btn {
              width: 100%;
              justify-content: center;
            }
            
            .settings-content {
              padding: 20px;
            }
            
            .settings-section {
              margin-bottom: 24px;
              padding-bottom: 16px;
            }
            
            .not-signed-in {
              padding: 40px 20px;
            }
            
            .not-signed-in-icon {
              font-size: 3rem;
            }
            
            .not-signed-in h2 {
              font-size: 1.5rem;
            }
          }
          
          /* Animation for form elements */
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
          
          .settings-section {
            animation: fadeInUp 0.5s ease forwards;
          }
          
          .settings-section:nth-child(1) { animation-delay: 0.1s; }
          .settings-section:nth-child(2) { animation-delay: 0.2s; }
          .settings-section:nth-child(3) { animation-delay: 0.3s; }
          
          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .settings-section {
              animation: none;
            }
            
            .btn:hover {
              transform: none;
            }
          }
        `}
      </style>

      <div className="settings-container">
        <div className="page-header">
          <h1 className="page-title">Settings</h1>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
        </div>

        <div className="settings-content">
          {message.text && (
            <div className={`message message-${message.type}`}>
              <span>{message.type === 'success' ? '✅' : '❌'}</span>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="settings-section">
              <h2>Appearance</h2>
              
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="darkMode"
                  name="darkMode"
                  className="checkbox-input"
                  checked={settings.darkMode}
                  onChange={handleChange}
                />
                <label htmlFor="darkMode" className="checkbox-label">
                  Dark Mode
                </label>
              </div>

              <div className="form-group">
                <label className="form-label">Language</label>
                <select
                  name="language"
                  className="form-select"
                  value={settings.language}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>

            <div className="settings-section">
              <h2>Notifications</h2>
              
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  className="checkbox-input"
                  checked={settings.notifications}
                  onChange={handleChange}
                />
                <label htmlFor="notifications" className="checkbox-label">
                  Enable Notifications
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="autoSave"
                  name="autoSave"
                  className="checkbox-input"
                  checked={settings.autoSave}
                  onChange={handleChange}
                />
                <label htmlFor="autoSave" className="checkbox-label">
                  Auto-save Changes
                </label>
              </div>
            </div>

            <div className="settings-section">
              <h2>Account</h2>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={user.email || ""}
                  disabled
                />
              </div>

              <div className="form-group">
                <label className="form-label">Account Created</label>
                <input
                  type="text"
                  className="form-input"
                  value={user.metadata?.creationTime || "Unknown"}
                  disabled
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', marginTop: '20px' }}
            >
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Saving...
                </>
              ) : (
                "Save Settings"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};