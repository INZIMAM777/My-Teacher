import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFirebase } from "../../context/MyTeacher";

export const EditTeacherForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTeacherById, updateTeacher } = useFirebase();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const teacher = await getTeacherById(id);
        // Ensure Cabin object has proper structure
        const formattedTeacher = {
          ...teacher,
          Cabin: teacher.Cabin && typeof teacher.Cabin === 'object' 
            ? teacher.Cabin 
            : { no: teacher.Cabin || teacher["Cabin.no"] || "" }
        };
        setFormData(formattedTeacher);
      } catch (error) {
        console.error("Error fetching teacher:", error);
      }
    };
    fetchTeacher();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.Name?.trim()) {
      newErrors.Name = "Name is required";
    }
    
    if (!formData.Subject?.trim()) {
      newErrors.Subject = "Subject is required";
    }
    
    if (!formData.Cabin?.no?.trim()) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    try {
      // Process expertise field into an array if provided
      const teacherData = {
        ...formData,
        Expertise: formData.Expertise ? (typeof formData.Expertise === 'string' 
          ? formData.Expertise.split(',').map(item => item.trim()) 
          : formData.Expertise) : []
      };
      
      await updateTeacher(id, teacherData);
      navigate("/");
    } catch (error) {
      console.error("Error updating teacher:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    
    if (name === "Cabin.no") {
      setFormData((prev) => ({ 
        ...prev, 
        Cabin: { no: value } 
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  if (!formData) return (
    <div className="edit-teacher-container">
      <div className="page-header">
        <h1 className="page-title">Edit Teacher</h1>
        <button 
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <div className="loading-spinner"></div>
        <p>Loading teacher data...</p>
      </div>
    </div>
  );

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
          
          .edit-teacher-container {
            max-width: 1000px;
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

          .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            background-color: #2c2c2c;
            color: #e0e0e0;
          }

          .form-input:focus, .form-select:focus, .form-textarea:focus {
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

          .required-field::after {
            content: " *";
            color: var(--danger);
          }

          /* Mobile-specific improvements */
          @media (max-width: 768px) {
            .edit-teacher-container {
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
            
            .form-input, .form-select, .form-textarea {
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
            
            .form-input, .form-select, .form-textarea {
              padding: 14px;
              width: 90%;
            }
          }

          /* Extra small devices */
          @media (max-width: 360px) {
            .edit-teacher-container {
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

      <div className="edit-teacher-container">
        <div className="page-header">
          <h1 className="page-title">Edit Teacher</h1>
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
                className={`form-input ${errors.Name ? 'form-input-error' : ''}`}
                name="Name"
                value={formData.Name || ""}
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
                className={`form-input ${errors.Subject ? 'form-input-error' : ''}`}
                name="Subject"
                placeholder="e.g., Cloud Computing"
                value={formData.Subject || ""}
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
              <label className="form-label required-field">Cabin Number</label>
              <input
                type="text"
                className={`form-input ${errors.Cabin ? 'form-input-error' : ''}`}
                name="Cabin.no"
                placeholder="e.g., 213A"
                value={formData.Cabin?.no || ""}
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
              <label className="form-label required-field">Contact</label>
              <input
                type="tel"
                className={`form-input ${errors.Contact ? 'form-input-error' : ''}`}
                name="Contact"
                placeholder="e.g., 918932232332"
                value={formData.Contact || ""}
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
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-input ${errors.Email ? 'form-input-error' : ''}`}
                name="Email"
                placeholder="sivaram@vitstaff.ac.in"
                value={formData.Email || ""}
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
                className="form-input"
                name="Education"
                placeholder="e.g., PhD"
                value={formData.Education || ""}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Free Time</label>
              <input
                type="datetime-local"
                className="form-input"
                name="FreeTime"
                value={formData.FreeTime || ""}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Image URL</label>
              <input
                type="url"
                className="form-input"
                name="Img"
                placeholder="Paste image URL here"
                value={formData.Img || ""}
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
              <label className="form-label">Expertise (comma separated)</label>
              <input
                type="text"
                className="form-input"
                name="Expertise"
                placeholder="e.g., Cloud Architecture, Security, Networking"
                value={Array.isArray(formData.Expertise) ? formData.Expertise.join(", ") : formData.Expertise || ""}
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
                  Updating...
                </>
              ) : (
                "Update Teacher"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};