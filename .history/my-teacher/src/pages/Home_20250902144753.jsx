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
    <style> { :root { --primary: #4361ee; --secondary: #3f37c9; --success: #4cc9f0; --danger: #f72585; --warning: #f8961e; --light: #f8f9fa; --dark: #212529; --gray: #6c757d; --light-gray: #e9ecef; } .home-container { max-width: 1400px; margin: 20px auto; padding: 20px; } .page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; flex-wrap: wrap; gap: 15px; } .page-title { font-size: 2.2rem; font-weight: 700; color: var(--dark); margin: 0; } .controls { display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 20px; } .search-box { position: relative; flex: 1; min-width: 250px; } .search-input { width: 100%; padding: 12px 15px 12px 40px; border: 1px solid var(--light-gray); border-radius: 8px; font-size: 1rem; transition: all 0.3s; } .search-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2); } .search-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--gray); } .filter-select { padding: 12px 15px; border: 1px solid var(--light-gray); border-radius: 8px; font-size: 1rem; background-color: white; min-width: 180px; } .btn { padding: 12px 20px; border: none; border-radius: 8px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; } .btn-primary { background-color: var(--primary); color: white; } .btn-primary:hover { background-color: var(--secondary); } .btn-danger { background-color: var(--danger); color: white; } .btn-danger:hover { background-color: #d11466; } .btn-warning { background-color: var(--warning); color: white; } .btn-warning:hover { background-color: #e4850d; } .btn-sm { padding: 8px 12px; font-size: 0.875rem; } .teacher-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 25px; margin-top: 20px; } .teacher-card { background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); transition: all 0.3s ease; position: relative; } .teacher-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); } .teacher-img-container { position: relative; height: 200px; overflow: hidden; } .teacher-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; } .teacher-card:hover .teacher-img { transform: scale(1.05); } .teacher-actions { position: absolute; top: 15px; right: 15px; display: flex; gap: 10px; opacity: 0; transition: opacity 0.3s; } .teacher-card:hover .teacher-actions { opacity: 1; } .teacher-details { padding: 20px; } .teacher-details h3 { margin: 0 0 10px 0; color: var(--primary); font-size: 1.4rem; } .teacher-details p { margin: 8px 0; color: var(--gray); display: flex; } .teacher-details strong { color: var(--dark); min-width: 100px; display: inline-block; } .status-badge { display: inline-block; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; margin-left: 10px; } .status-available { background-color: rgba(76, 201, 240, 0.15); color: #4cc9f0; } .status-busy { background-color: rgba(247, 37, 133, 0.15); color: #f72585; } .loading-spinner { display: inline-block; width: 20px; height: 20px; border: 3px solid rgba(67, 97, 238, 0.3); border-radius: 50%; border-top-color: var(--primary); animation: spin 1s ease-in-out infinite; } @keyframes spin { to { transform: rotate(360deg); } } .empty-state { text-align: center; padding: 40px 20px; color: var(--gray); } .empty-state svg { font-size: 3rem; margin-bottom: 15px; color: var(--light-gray); } .stats-container { display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; } .stat-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); flex: 1; min-width: 200px; } .stat-value { font-size: 2rem; font-weight: 700; color: var(--primary); margin: 0; } .stat-label { color: var(--gray); margin: 5px 0 0 0; } @media (max-width: 768px) { .page-header { flex-direction: column; align-items: flex-start; } .controls { flex-direction: column; width: 100%; } .search-box, .filter-select { width: 100%; } .teacher-grid { grid-template-columns: 1fr; } } } </style>
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
