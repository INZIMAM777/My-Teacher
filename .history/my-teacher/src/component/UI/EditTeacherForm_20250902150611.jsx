// pages/EditTeacherForm.js
import { useParams, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/MyTeacher";
import { useEffect, useState } from "react";

export const EditTeacherForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTeacherById, updateTeacher } = useFirebase();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [subjects] = useState([
    "SPM", "Mathematics", "Physics", "Chemistry", "Biology",
    "English", "History", "Geography", "Computer Science", "Art",
  ]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const teacher = await getTeacherById(id);
        setFormData(teacher);
      } catch (error) {
        console.error("Error fetching teacher:", error);
      }
    };
    fetchTeacher();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateTeacher(id, formData);
      navigate("/");
    } catch (error) {
      console.error("Error updating teacher:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!formData) return (
    <div className="form-container">
      <div className="loading-spinner" style={{margin: "0 auto"}}></div>
      <p style={{textAlign: "center"}}>Loading teacher data...</p>
    </div>
  );

  return (
    <>
      <style>
        {`
          .form-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          }
          
          .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          }
          
          .form-title {
            font-size: 1.8rem;
            color: var(--primary);
            margin: 0;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
          }
          
          .form-input, .form-select, .form-textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
          }
          
          .form-input:focus, .form-select:focus, .form-textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
          }
          
          .form-textarea {
            min-height: 100px;
            resize: vertical;
          }
          
          .form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            margin-top: 30px;
          }
          
          .btn-secondary {
            background-color: var(--gray);
            color: white;
          }
          
          .btn-secondary:hover {
            background-color: #5a6268;
          }
        `}
      </style>

      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Edit Teacher</h2>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            ← Back to List
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              name="Name"
              value={formData.Name || ""}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Subject</label>
            <select
              className="form-select"
              name="Subject"
              value={formData.Subject || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Cabin Number</label>
            <input
              type="text"
              className="form-input"
              name="Cabin.no"
              value={formData["Cabin.no"] || ""}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Contact</label>
            <input
              type="text"
              className="form-input"
              name="Contact"
              value={formData.Contact || ""}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              name="Email"
              value={formData.Email || ""}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Education</label>
            <input
              type="text"
              className="form-input"
              name="Education"
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
              {loading ? "Updating..." : "Update Teacher"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};