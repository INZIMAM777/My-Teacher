import { useEffect } from "react";
import { useFirebase } from "../context/MyTeacher";
import { useNavigate } from "react-router-dom";

const defaultTeacherImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export const Home = () => {
  const {
    getLists,
    teacher,
    loading,
    error,
    deleteTeacher,
    searchTerm,
    setSearchTerm,
  } = useFirebase();

  const navigate = useNavigate();

  useEffect(() => {
    getLists();
  }, []);

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
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      getLists();
    }
  };

  const handleSearchClick = () => {
    getLists();
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
          
          .home-container {
            max-width: 1400px;
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

          .controls {
            display: flex;
            margin-bottom: 20px;
            background: #2c2c2c;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--light-gray);
            transition: all 0.3s;
          }

          .controls:focus-within {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(187, 134, 252, 0.2);
          }

          .search-box {
            position: relative;
            flex: 1;
          }

          .search-input {
            width: 100%;
            padding: 14px 15px 14px 45px;
            border: none;
            font-size: 1rem;
            background-color: transparent;
            color: #e0e0e0;
            outline: none;
          }

          .search-input::placeholder {
            color: var(--gray);
          }

          .search-icon {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray);
          }

          .search-btn {
            padding: 14px 20px;
            border: none;
            background-color: var(--primary);
            color: #121212;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            white-space: nowrap;
          }

          .search-btn:hover {
            background-color: var(--secondary);
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

          .btn-danger {
            background-color: var(--danger);
            color: white;
          }

          .btn-danger:hover {
            background-color: #b85565;
          }

          .btn-warning {
            background-color: var(--warning);
            color: #121212;
          }

          .btn-warning:hover {
            background-color: #ffa726;
          }

          .btn-sm {
            padding: 8px 12px;
            font-size: 0.875rem;
            border-radius: 6px;
          }

          .teacher-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .teacher-card {
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            position: relative;
            border: 1px solid #333;
          }

          .teacher-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
            border-color: #555;
          }

          .teacher-img-container {
            position: relative;
            height: 200px;
            overflow: hidden;
          }

          .teacher-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }

          .teacher-card:hover .teacher-img {
            transform: scale(1.05);
          }

          .teacher-actions {
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s;
          }

          .teacher-card:hover .teacher-actions {
            opacity: 1;
            z-index: 2;
          }

          .teacher-details {
            padding: 20px;
          }

          .teacher-details h3 {
            margin: 0 0 10px 0;
            color: var(--primary);
            font-size: 1.4rem;
          }

          .teacher-details p {
            margin: 8px 0;
            color: var(--gray);
            display: flex;
            flex-wrap: wrap;
          }

          .teacher-details strong {
            color: var(--dark);
            min-width: 100px;
            display: inline-block;
          }

          .status-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-left: 10px;
          }

          .status-available {
            background-color: rgba(3, 218, 198, 0.15);
            color: #03dac6;
          }

          .status-busy {
            background-color: rgba(207, 102, 121, 0.15);
            color: #cf6679;
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

          .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--gray);
            grid-column: 1 / -1;
          }

          .empty-state-icon {
            font-size: 3rem;
            margin-bottom: 15px;
            color: var(--light-gray);
          }

          .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
          }

          .stat-card {
            background: var(--card-bg);
            padding: 16px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            border: 1px solid #333;
            text-align: center;
          }

          .stat-value {
            font-size: 1.75rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0;
          }

          .stat-label {
            color: var(--gray);
            margin: 5px 0 0 0;
            font-size: 0.9rem;
          }

          /* Mobile-specific improvements */
          @media (max-width: 768px) {
            .home-container {
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
            
            .controls {
              flex-direction: column;
              border-radius: 12px;
              max-width: 100%;
              margin-bottom: 16px;
            }
            
            .search-box {
              width: 100%;
            }
            
            .search-input {
              padding: 16px 15px 16px 45px;
              font-size: 16px; /* Prevents zoom on iOS */
            }
            
            .search-btn {
              width: 100%;
              justify-content: center;
              border-radius: 0 0 12px 12px;
              padding: 16px;
            }
            
            .teacher-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            
            .teacher-img-container {
              height: 180px;
            }
            
            .teacher-details {
              padding: 16px;
            }
            
            .teacher-details h3 {
              font-size: 1.25rem;
            }
            
            .teacher-details p {
              flex-direction: column;
              margin: 6px 0;
            }
            
            .teacher-details strong {
              min-width: unset;
              margin-bottom: 4px;
            }
            
            .status-badge {
              margin-left: 0;
              margin-top: 4px;
              align-self: flex-start;
            }
            
            .teacher-actions {
              opacity: 1; /* Always show on mobile for usability */
              flex-direction: column;
              gap: 8px;
            }
            
            .stats-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            
            .stat-card {
              padding: 12px;
            }
            
            .stat-value {
              font-size: 1.5rem;
            }
            
            .btn {
              width: 100%;
              justify-content: center;
              padding: 14px 16px;
            }
          }

          @media (max-width: 480px) {
            .stats-container {
              grid-template-columns: 1fr;
            }
            
            .teacher-img-container {
              height: 160px;
            }
            
            .page-title {
              font-size: 1.35rem;
            }
          }

          /* Extra small devices */
          @media (max-width: 360px) {
            .home-container {
              padding: 8px;
            }
            
            .teacher-details {
              padding: 12px;
            }
            
            .teacher-details h3 {
              font-size: 1.15rem;
            }
          }

          /* Tablet adjustments */
          @media (min-width: 769px) and (max-width: 1024px) {
            .teacher-grid {
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            }
            
            .stats-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          /* Touch device improvements */
          @media (hover: none) {
            .teacher-card:hover {
              transform: none;
            }
            
            .teacher-actions {
              opacity: 1;
            }
            
            .teacher-card:hover .teacher-img {
              transform: none;
            }
          }
        `}
      </style>

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

        {/* Stats Overview */}
        <div className="stats-container">
          <div className="stat-card">
            <p className="stat-value">{teacher.length}</p>
            <p className="stat-label">Total Teachers</p>
          </div>
          <div className="stat-card">
            <p className="stat-value">
              {new Set(teacher.map(t => t.Subject)).size}
            </p>
            <p className="stat-label">Subjects</p>
          </div>
          <div className="stat-card">
            <p className="stat-value">
              {teacher.filter(t => {
                const freeTime = t.FreeTime?.toDate ? t.FreeTime.toDate() : new Date(t.FreeTime);
                return freeTime > new Date();
              }).length}
            </p>
            <p className="stat-label">Available Now</p>
          </div>
        </div>

        {/* Search Controls */}
        <div className="controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search teachers by name, subject, cabin..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyPress={handleSearchSubmit}
            />
          </div>
          
          <button 
            className="search-btn"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <div className="loading-spinner"></div>
            <p>Loading teachers...</p>
          </div>
        )}
        
        {error && (
          <div style={{ 
            color: "var(--danger)", 
            padding: "15px", 
            backgroundColor: "rgba(207, 102, 121, 0.1)",
            borderRadius: "8px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span>❌</span>
            <span>{error}</span>
          </div>
        )}

        <div className="teacher-grid">
          {teacher.length > 0 ? (
            teacher.map((t) => (
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
                  <p>
                    <strong>Subject:</strong> 
                    {t.Subject}
                    {t.isAvailable && (
                      <span className="status-badge status-available">Available</span>
                    )}
                  </p>
                  <p><strong>Cabin No:</strong> {t.Cabin?.no || "N/A"}</p>
                  <p><strong>Contact:</strong> {t.Contact}</p>
                  <p><strong>Email:</strong> {t.Email || "N/A"}</p>
                  <p><strong>Education:</strong> {t.Education || "N/A"}</p>
                  <p>
                    <strong>Free Time:</strong>{" "}
                    {t.FreeTime?.toDate
                      ? t.FreeTime.toDate().toLocaleString()
                      : t.FreeTime || "Not specified"}
                  </p>
                  {t.Expertise && t.Expertise.length > 0 && (
                    <p>
                      <strong>Expertise:</strong> 
                      {Array.isArray(t.Expertise) ? t.Expertise.join(", ") : t.Expertise}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="empty-state">
                <div className="empty-state-icon">👨‍🏫</div>
                <h3>No teachers found</h3>
                <p>Try adjusting your search or add a new teacher</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};