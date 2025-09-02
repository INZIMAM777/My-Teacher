import { useEffect } from "react";
import { useFirebase } from "../context/MyTeacher";

export const Home = () => {
  const { getLists, teacher, loading, error } = useFirebase();

  // Fetch teacher data when Home loads
  useEffect(() => {
    getLists();
  }, []);

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

          .teacher-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }

          .teacher-card {
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s;
          }

          .teacher-card:hover {
            transform: translateY(-5px);
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

          .teacher-details p {
            margin: 6px 0;
            color: #334155;
          }

          .teacher-details strong {
            color: #111827;
          }
        `}
      </style>

      <div className="home-container">
        <h1>Welcome to Home Page</h1>
        <h2>Our Teachers</h2>

        {loading && <p>Loading teachers...</p>}
        {error && <p style={{ color: "red" }}>❌ {error}</p>}

        <div className="teacher-grid">
          {teacher.length > 0 ? (
            teacher.map((t) => (
              <div key={t.id} className="teacher-card">
                {/* Teacher Image */}
                <img
                  src={t.Img}
                  alt={t.Name}
                  className="teacher-img"
                />

                {/* Teacher Details */}
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
