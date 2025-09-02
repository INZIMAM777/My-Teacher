import { useEffect } from "react";

export const Home = () => {
  const { getLists, teacher, loading, error } = useFirebase();
  

  // Load teacher list when Home mounts
  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <style>
        {`
          .home-container {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            text-align: center;
          }

          .teacher-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .teacher-card {
            background: #f1f5f9;
            border-radius: 12px;
            padding: 15px;
            text-align: left;
            box-shadow: 0 3px 8px rgba(0,0,0,0.1);
          }

          .teacher-card h3 {
            color: #2563eb;
            margin: 0 0 10px;
          }

          .teacher-field {
            margin: 6px 0;
          }

          .teacher-field strong {
            color: #1e293b;
          }
        `}
      </style>

      <div className="home-container">
        <h1>Welcome to Home Page</h1>
        <h2>All Teachers</h2>

        {loading && <p>Loading teachers...</p>}
        {error && <p style={{ color: "red" }}>❌ {error}</p>}

        <div className="teacher-grid">
          {teacher.length > 0 ? (
            teacher.map((t) => (
              <div key={t.id} className="teacher-card">
                <h3>{t.Name}</h3>
                <div className="teacher-field">
                  <strong>Subject:</strong> {t.Subject}
                </div>
                <div className="teacher-field">
                  <strong>Cabin No:</strong> {t["Cabin.no"]}
                </div>
                <div className="teacher-field">
                  <strong>Contact:</strong> {t.Contact}
                </div>
                <div className="teacher-field">
                  <strong>Free Time:</strong>{" "}
                  {t.FreeTime?.toDate
                    ? t.FreeTime.toDate().toLocaleString()
                    : t.FreeTime}
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
