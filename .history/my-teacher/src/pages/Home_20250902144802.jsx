import { useEffect, useState } from "react";
import { useFirebase } from "../context/MyTeacher";
import { useNavigate } from "react-router-dom";

const defaultTeacherImg =
  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export const Home = () => {
  const {
    getLists,
    teacher,
    loading,
    error,
    deleteTeacher,
    searchTerm,
    setSearchTerm,
    filterSubject,
    setFilterSubject,
  } = useFirebase();

  const [subjects] = useState([
    "SPM", "Mathematics", "Physics", "Chemistry", "Biology",
    "English", "History", "Geography", "Computer Science", "Art",
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    getLists({ subject: filterSubject || null });
  }, [filterSubject]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await deleteTeacher(id);
      } catch (error) {
        console.error("Error deleting teacher:", error);
      }
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    getLists({ subject: filterSubject || null });
  };

  return (
    
    
    <div className="home-container">
      <div className="page-header">
        <h1 className="page-title">Teacher Management</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-teacher")}
        >
          <span>+ Add New Teacher</span>
        </button>
      </div>

      {/* teacher list */}
      <div className="teacher-grid">
        {teacher.map((t) => (
          <div key={t.id} className="teacher-card">
            <div className="teacher-img-container">
              <img
                src={t.Img || defaultTeacherImg}
                alt={t.Name}
                className="teacher-img"
                onError={(e) => (e.currentTarget.src = defaultTeacherImg)}
              />
              <div className="teacher-actions">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => navigate(`/edit-teacher/${t.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(t.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="teacher-details">
              <h3>{t.Name}</h3>
              <p><strong>Subject:</strong> {t.Subject}</p>
              <p><strong>Cabin No:</strong> {t["Cabin.no"]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
