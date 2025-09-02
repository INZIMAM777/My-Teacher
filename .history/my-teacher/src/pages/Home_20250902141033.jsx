import { useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

// Firestore reference
const firestore = getFirestore(app);

// Default Teacher Image
const defaultTeacherImg =
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export const Home = () => {
  const { getLists, teacher, loading, error } = useFirebase();

  const [formData, setFormData] = useState({
    Name: "",
    Subject: "",
    "Cabin.no": "",
    Contact: "",
    FreeTime: "",
    Img: "",
  });

  const [saving, setSaving] = useState(false);

  // Fetch teacher data when Home loads
  useEffect(() => {
    getLists();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add teacher to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await addDoc(collection(firestore, "teachers"), {
        ...formData,
        Contact: Number(formData.Contact), // ensure number
        FreeTime: new Date(formData.FreeTime), // store as timestamp
      });
      setFormData({
        Name: "",
        Subject: "",
        "Cabin.no": "",
        Contact: "",
        FreeTime: "",
        Img: "",
      });
      getLists(); // refresh list
      alert("✅ Teacher added successfully!");
    } catch (err) {
      console.error("Error adding teacher:", err);
      alert("❌ Failed to add teacher");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <style>
        {`
          .home-container {
            max-width: 1100px;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
          }

          .teacher-form {
            background: #f9fafb;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: left;
          }

          .teacher-form input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #d1d5db;
            border-radius: 6px;
          }

          .teacher-form button {
            background: #2563eb;
            color: white;
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
          }

          .teacher-form button:disabled {
            background: #9ca3af;
          }

          .teacher-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .teacher-card {
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          .teacher-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .teacher-details {
            padding: 15px;
            text-align: left;
          }

          .teacher-details h3 {
            margin: 0;
            color: #2563eb;
          }
        `}
      </style>

      <div className="home-container">
        <h1>Welcome to Home Page</h1>
        <h2>Our Teachers</h2>

        {/* Add Teacher Form */}
        <form className="teacher-form" onSubmit={handleSubmit}>
          <h3>Add New Teacher</h3>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            value={formData.Subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Cabin.no"
            placeholder="Cabin No"
            value={formData["Cabin.no"]}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Contact"
            placeholder="Contact"
            value={formData.Contact}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="FreeTime"
            value={formData.FreeTime}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Img"
            placeholder="Image URL (optional)"
            value={formData.Img}
            onChange={handleChange}
          />
          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Add Teacher"}
          </button>
        </form>

        {/* Show Teachers */}
        {loading && <p>Loading teachers...</p>}
        {error && <p style={{ color: "red" }}>❌ {error}</p>}

        <div className="teacher-grid">
          {teacher.length > 0 ? (
            teacher.map((t) => (
              <div key={t.id} className="teacher-card">
                <img
                  src={t.Img || defaultTeacherImg}
                  alt={t.Name}
                  className="teacher-img"
                  onError={(e) => (e.currentTarget.src = defaultTeacherImg)}
                />
                <div className="teacher-details">
                  <h3>{t.Name}</h3>
                  <p><strong>Subject:</strong> {t.Subject}</p>
                  <p><strong>Cabin No:</strong> {t["Cabin.no"]}</p>
                  <p><strong>Contact:</strong> {t.Contact}</p>
                  <p>
                    <strong>Free Time:</strong>{" "}
                    {t.FreeTime?.toDate
                      ? t.FreeTime.toDate().toLocaleString()
                      : t.FreeTime}
                  </p>
                </div>
              </div>
            ))
          ) : (
            !loading && <p>No teachers available.</p>
          )}
        </div>
      </div>
    </>
  );
};
