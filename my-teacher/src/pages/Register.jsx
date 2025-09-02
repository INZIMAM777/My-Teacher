import { useState } from "react";
import { useFirebase } from "../context/MyTeacher";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const { signUpEp, signGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    
    setIsLoading(true);
    try {
      await signUpEp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      await signGoogle();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            --card-surface: #1e1e1e;
          }
          
          .auth-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--primary-dark);
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          .auth-card {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            border-radius: 16px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 420px;
            overflow: hidden;
            position: relative;
            border: 1px solid #2d2d2d;
          }
          
          .auth-header {
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #252525 100%);
            color: var(--text-light);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 1px solid #2d2d2d;
          }
          
          .auth-header h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            color: var(--accent-teal);
          }
          
          .auth-header p {
            margin: 10px 0 0;
            opacity: 0.9;
            font-size: 14px;
          }
          
          .auth-body {
            padding: 30px;
          }
          
          .auth-error {
            background: rgba(198, 40, 40, 0.1);
            color: #ff5252;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
            border-left: 4px solid #ff5252;
          }
          
          .auth-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .form-group {
            display: flex;
            flex-direction: column;
          }
          
          .form-label {
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--accent-teal);
            font-size: 14px;
          }
          
          .form-input {
            padding: 14px;
            background: var(--secondary-dark);
            border: 1px solid #2d2d2d;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.3s ease;
            color: var(--text-light);
          }
          
          .form-input:focus {
            outline: none;
            border-color: var(--accent-purple);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }
          
          .form-input::placeholder {
            color: #888;
          }
          
          .password-strength {
            height: 4px;
            background: #2d2d2d;
            border-radius: 2px;
            margin-top: 8px;
            overflow: hidden;
          }
          
          .password-strength-fill {
            height: 100%;
            transition: all 0.3s ease;
          }
          
          .btn {
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: button;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
          }
          
          .btn-primary {
            background: var(--accent-purple);
            color: var(--primary-dark);
          }
          
          .btn-primary:hover {
            background: var(--accent-teal);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(3, 218, 198, 0.4);
          }
          
          .btn-google {
            background: #4285f4;
            color: white;
          }
          
          .btn-google:hover {
            background: #357ae8;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(66, 133, 244, 0.4);
          }
          
          .btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          
          .auth-divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
            color: #777;
            font-size: 14px;
          }
          
          .auth-divider::before,
          .auth-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #2d2d2d;
          }
          
          .auth-divider span {
            padding: 0 15px;
          }
          
          .auth-footer {
            text-align: center;
            margin-top: 25px;
            color: var(--text-light);
            opacity: 0.8;
            font-size: 14px;
          }
          
          .auth-link {
            color: var(--accent-purple);
            text-decoration: none;
            font-weight: 600;
          }
          
          .auth-link:hover {
            text-decoration: underline;
            color: var(--accent-teal);
          }
          
          .loading-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid transparent;
            border-top: 2px solid var(--primary-dark);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @media (max-width: 480px) {
            .auth-card {
              border-radius: 12px;
            }
            
            .auth-body {
              padding: 20px;
            }
            
            .auth-header {
              padding: 20px 15px;
            }
          }
        `}
      </style>
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join us to manage your teachers efficiently</p>
          </div>
          
          <div className="auth-body">
            {error && <div className="auth-error">{error}</div>}
            
            <form onSubmit={handleRegister} className="auth-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="password-strength">
                  <div 
                    className="password-strength-fill" 
                    style={{
                      width: `${Math.min(password.length * 10, 100)}%`,
                      backgroundColor: password.length >= 6 ? '#4caf50' : '#f44336'
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-input"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? <span className="loading-spinner"></span> : null}
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
            
            <div className="auth-divider">
              <span>Or continue with</span>
            </div>
            
            <button
              onClick={handleGoogle}
              className="btn btn-google"
              disabled={isLoading}
            >
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Sign Up with Google
            </button>
            
            <div className="auth-footer">
              Already have an account? <Link to="/login" className="auth-link">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
