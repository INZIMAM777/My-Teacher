
// ---------------- ADD TEACHER ----------------
export const TeacherForm = ({ onClose, onSave }) => {
  const { addTeacher } = useFirebase();
  const [formData, setFormData] = useState({
    Name: "",
    Subject: "",
    "Cabin.no": "",
    Contact: "",
    Email: "",
    Education: "",
    FreeTime: "",
    Expertise: [],
    Img: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addTeacher(formData);
      onSave();
    } catch (error) {
      console.error("Error adding teacher:", error);
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
      {/* Reuse the same CSS as above, so no need to duplicate */}

      <div className="modal-overlay">
        <div className="modal">
          <h2>Add New Teacher</h2>
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
            <div className="form-group">
              <label>Cabin Number</label>
              <input
                type="text"
                name="Cabin.no"
                value={formData["Cabin.no"]}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                name="Contact"
                value={formData.Contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Education</label>
              <input
                type="text"
                name="Education"
                value={formData.Education}
                onChange={handleChange}
                placeholder="e.g., M.Sc. in Mathematics"
              />
            </div>
            <div className="form-group">
              <label>Free Time</label>
              <input
                type="datetime-local"
                name="FreeTime"
                value={formData.FreeTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                name="Img"
                value={formData.Img}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="modal-actions">
              <button type="button" onClick={onClose}>Cancel</button>
              <button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Teacher"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
