import { useState } from "react";

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
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
          {/* Include all other fields similar to TeacherForm */}
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Teacher"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};