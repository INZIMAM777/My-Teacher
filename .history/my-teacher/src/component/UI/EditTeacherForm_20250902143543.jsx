import { useState } from "react";
import { useFirebase } from "../context/MyTeacher";

// ---------------- EDIT TEACHER ----------------
export const EditTeacherForm = ({ teacher, onClose, onSave }) => {
  const { updateTeacher } = useFirebase();
  const [formData, setFormData] = useState(teacher);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateTeacher(teacher.id, formData);
      onSave();
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

  return (
    <>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .modal {
            background: white;
            padding: 25px;
            border-radius: 10px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            animation: fadeIn 0.3s ease-in-out;
          }
          .modal h2 {
            margin-bottom: 20px;
            color: #2563eb;
            font-size: 20px;
            text-align: center;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 14px;
          }
          .form-group input {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 14px;
          }
          .form-group input:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
          }
          .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
          .modal-actions button {
            padding: 8px 15px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
          }
          .modal-actions button[type="button"] {
            background: #ddd;
          }
          .modal-actions button[type="submit"] {
            background: #2563eb;
            color: white;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="modal-overlay">
        <div className="modal">
          <h2>Edit Teacher</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal-actions">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Teacher"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
