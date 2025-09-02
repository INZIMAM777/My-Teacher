import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const AddTeacher = () => {
  const firestore = getFirestore(app);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    Name: "",
    Subject: "",
    Contact: "",
    Cabin: {
      no: ""
    },
    FreeTime: "",
    Img: "",
    Email: "",
    Education: "",
    Expertise: []
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    }
    
    if (!formData.Subject.trim()) {
      newErrors.Subject = "Subject is required";
    }
    
    if (!formData.Cabin.no.trim()) {
      newErrors.Cabin = "Cabin number is required";
    }
    
    if (!formData.Contact) {
      newErrors.Contact = "Contact is required";
    } else if (formData.Contact.toString().length < 10) {
      newErrors.Contact = "Contact must be at least 10 digits";
    }
    
    if (formData.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    if (name === "Cabin.no") {
      setFormData({ 
        ...formData, 
        Cabin: { no: value } 
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Convert Contact to number and process expertise field into an array if provided
      const teacherData = {
        ...formData,
        Contact: Number(formData.Contact),
        Expertise: formData.Expertise ? formData.Expertise.split(',').map(item => item.trim()) : []
      };
      
      await addDoc(collection(firestore, "teachers"), teacherData);
      alert("Teacher added successfully!");
      setFormData({
        Name: "",
        Subject: "",
        Contact: "",
        Cabin: {
          no: ""
        },
        FreeTime: "",
        Img: "",
        Email: "",
        Education: "",
        Expertise: []
      });
    } catch (err) {
      console.error("Error adding teacher: ", err);
      alert("Error adding teacher. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          
          body {
            background-color: var(--body-bg);
            color: #e0e0e0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
          }
          
          .add-teacher-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 16px;
            background-color: var(--body-bg);
          }

          .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
            flex-wrap: wrap;
            gap: 16px;
          }

          .page-title {
            font-size: 1.75rem;
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

          .teacher-form {
            background: var(--card-bg);
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border: 1px solid #333;
          }

          .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 18px;
          }

          .form-label {
            display: block;
            margin-bottom: 8px;
            color: var(--dark);
            font-weight: 500;
          }

          .form-input, .form-select {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            background-color: #2c2c2c;
            color: #e0e0e0;
          }

          .form-input:focus, .form-select:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }

          .form-input-error {
            border-color: var(--danger);
          }

          .form-input-error:focus {
            border-color: var(--danger);
            box-shadow: 0 0 0 3px rgba(207, 102, 121, 0.2);
          }

          .error-message {
            color: var(--danger);
            font-size: 0.875rem;
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .form-actions {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
            margin-top: 24px;
            flex-wrap: wrap;
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

          .required-field::after {
            content: " *";
            color: var(--danger);
          }

          /* Image preview styling */
          .image-preview {
            margin-top: 10px;
            text-align: center;
          }

          .preview-img {
            max-width: 200px;
            max-height: 200px;
            border-radius: 8px;
            border: 1px solid var(--light-gray);
          }

          /* Mobile-specific improvements */
          @media (max-width: 768px) {
            .add-teacher-container {
              padding: 12px;
            }
            
            .page-header {
              flex-direction: column;
              align-items: stretch;
              margin-bottom: 20px;
            }
            
            .page-title {
              font-size: 1.5rem;
              text-align: center;
            }
            
            .teacher-form {
              padding: 20px;
            }
            
            .form-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            
            .form-group {
              margin-bottom: 16px;
            }
            
            .form-input, .form-select {
              padding: 16px;
              font-size: 16px; /* Prevents zoom on iOS */
            }
            
            .form-actions {
              flex-direction: column-reverse;
              gap: 12px;
            }
            
            .btn {
              width: 100%;
              justify-content: center;
              padding: 16px;
            }
            
            .preview-img {
              max-width: 150px;
            }
          }

          @media (max-width: 480px) {
            .page-title {
              font-size: 1.35rem;
            }
            
            .teacher-form {
              padding: 16px;
            }
            
            .form-input, .form-select {
              padding: 14px;
            width: 90%;
            }
          }

          /* Extra small devices */
          @media (max-width: 360px) {
            .add-teacher-container {
              padding: 8px;
            }
            
            .teacher-form {
              padding: 14px;
            }
          }

          /* Tablet adjustments */
          @media (min-width: 769px) and (max-width: 1024px) {
            .form-grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
          }
        `}
      </style>

      <div className="add-teacher-container">
        <div className="page-header">
          <h1 className="page-title">Add New Teacher</h1>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>

        <form onSubmit={handleSubmit} className="teacher-form">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label required-field">Name</label>
              <input
                type="text"
                name="Name"
                className={`form-input ${errors.Name ? 'form-input-error' : ''}`}
                placeholder="Teacher's full name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
              {errors.Name && (
                <div className="error-message">
                  <span>⚠</span>
                  {errors.Name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label required-field">Subject</label>
              <input
                type="text"
                name="Subject"
                className={`form-input ${errors.Subject ? 'form-input-error' : ''}`}
                placeholder="e.g., Cloud Computing"
                value={formData.Subject}
                onChange={handleChange}
                required
              />
              {errors.Subject && (
                <div className="error-message">
                  <span>⚠</span>
                  {errors.Subject}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label required-field">Contact Number</label>
              <input
                type="tel"
                name="Contact"
                className={`form-input ${errors.Contact ? 'form-input-error' : ''}`}
                placeholder="e.g., 918932232332"
                value={formData.Contact}
                onChange={handleChange}
                required
              />
              {errors.Contact && (
                <div className="error-message">
                  <span>⚠</span>
                  {errors.Contact}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label required-field">Cabin Number</label>
              <input
                type="text"
                name="Cabin.no"
                className={`form-input ${errors.Cabin ? 'form-input-error' : ''}`}
                placeholder="e.g., 213A"
                value={formData.Cabin.no}
                onChange={handleChange}
                required
              />
              {errors.Cabin && (
                <div className="error-message">
                  <span>⚠</span>
                  {errors.Cabin}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Free Time</label>
              <input
                type="datetime-local"
                name="FreeTime"
                className="form-input"
                value={formData.FreeTime}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                name="Img"
                className="form-input"
                placeholder="Paste image URL here"
                value={formData.Img}
                onChange={handleChange}
              />
              {formData.Img && (
                <div className="image-preview">
                  <img 
                    src={formData.Img} 
                    alt="Preview" 
                    className="preview-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="Email"
                className={`form-input ${errors.Email ? 'form-input-error' : ''}`}
                placeholder="sivaram@vitstaff.ac.in"
                value={formData.Email}
                onChange={handleChange}
              />
              {errors.Email && (
                <div className="error-message">
                  <span>⚠</span>
                  {errors.Email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Education</label>
              <input
                type="text"
                name="Education"
                className="form-input"
                placeholder="e.g., PhD"
                value={formData.Education}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Expertise (comma separated)</label>
              <input
                type="text"
                name="Expertise"
                className="form-input"
                placeholder="e.g., Cloud Architecture, Security, Networking"
                value={formData.Expertise}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Adding...
                </>
              ) : (
                "Add Teacher"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};