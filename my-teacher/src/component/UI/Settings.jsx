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

          .settings-container {
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

          .settings-content {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border: 1px solid #333;
          }

          .settings-section {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--light-gray);
          }

          .settings-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }

          .settings-section h2 {
            color: var(--dark);
            margin: 0 0 20px 0;
            font-size: 1.5rem;
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

          .form-select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            background-color: #2c2c2c;
            color: #e0e0e0;
            appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 15px center;
            background-size: 16px;
          }

          .form-select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }

          .checkbox-group {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
          }

          .checkbox-input {
            width: 20px;
            height: 20px;
            border-radius: 4px;
            border: 2px solid var(--light-gray);
            background-color: #2c2c2c;
            appearance: none;
            position: relative;
            cursor: pointer;
            transition: all 0.3s;
          }

          .checkbox-input:checked {
            background-color: var(--primary);
            border-color: var(--primary);
          }

          .checkbox-input:checked::after {
            content: '✓';
            position: absolute;
            color: #121212;
            font-size: 14px;
            font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .checkbox-label {
            color: var(--dark);
            cursor: pointer;
            user-select: none;
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
            .settings-container {
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

            .settings-content {
              padding: 20px;
            }

            .settings-section h2 {
              font-size: 1.3rem;
            }

            .form-input, .form-select {
              padding: 14px;
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .page-title {
              font-size: 1.5rem;
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
              style={{ width: '100%' }}
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