// pages/TeachersPage.jsx
import { useEffect } from "react";
import { useFirebase } from "../context/MyTeacher";

export const TeachersPage = () => {
  const { getLists, teacher, loading, error } = useFirebase();

  // Fetch teachers when page loads
  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <style>
        {`
          :root {
            --primary-dark: #121212;
            --secondary-dark: #1e1e1e;
            --accent-purple: #bb86fc;
            --accent-teal: #03dac6;
            --text-light: #e0e0e0;
            --text-secondary: #a0a0a0;
            --card-surface: #1e1e1e;
            --border-color: #2d2d2d;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            background-color: var(--primary-dark);
          }
          
          .teachers-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          /* Header Section */
          .teachers-header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 20px;
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #2d2d2d 100%);
            border-radius: 16px;
            color: var(--text-light);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid var(--border-color);
          }
          
          .teachers-header h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 16px;
            letter-spacing: -0.5px;
            color: var(--accent-teal);
          }
          
          .teachers-header p {
            font-size: 1.1rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
            line-height: 1.6;
          }
          
          /* Teachers Grid */
          .teachers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
            margin-bottom: 40px;
          }
          
          .teacher-card {
            background: linear-gradient(145deg, var(--card-surface) 0%, #252525 100%);
            padding: 24px;
            border-radius: 16px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            text-align: center;
            border: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .teacher-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-purple);
          }
          
          .teacher-avatar {
            width: 80px;
            height: 80px;
            background: rgba(187, 134, 252, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 36px;
            color: var(--accent-purple);
            border: 1px solid rgba(187, 134, 252, 0.2);
          }
          
          .teacher-name {
            font-size: 1.4rem;
            margin-bottom: 8px;
            color: var(--accent-teal);
          }
          
          .teacher-email {
            color: var(--text-secondary);
            word-break: break-all;
          }
          
          /* Loading State */
          .loading-container {
            text-align: center;
            padding: 60px 20px;
            background: var(--card-surface);
            border-radius: 16px;
            border: 1px solid var(--border-color);
          }
          
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(187, 134, 252, 0.3);
            border-radius: 50%;
            border-top: 4px solid var(--accent-purple);
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Error State */
          .error-container {
            text-align: center;
            padding: 60px 20px;
            background: var(--card-surface);
            border-radius: 16px;
            border: 1px solid var(--border-color);
          }
          
          .error-icon {
            font-size: 50px;
            color: #cf6679;
            margin-bottom: 20px;
          }
          
          /* Empty State */
          .empty-container {
            text-align: center;
            padding: 60px 20px;
            background: var(--card-surface);
            border-radius: 16px;
            border: 1px solid var(--border-color);
          }
          
          .empty-icon {
            font-size: 50px;
            color: var(--text-secondary);
            margin-bottom: 20px;
            opacity: 0.7;
          }
          
          /* Stats Section */
          .stats-section {
            background: linear-gradient(135deg, var(--secondary-dark) 0%, #252525 100%);
            padding: 40px 20px;
            border-radius: 16px;
            color: var(--text-light);
            margin: 40px 0;
            text-align: center;
            border: 1px solid var(--border-color);
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 24px;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .stat-item {
            padding: 16px;
          }
          
          .stat-number {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 8px;
            color: var(--accent-purple);
            line-height: 1.2;
          }
          
          .stat-label {
            font-size: 1rem;
            opacity: 0.9;
          }
          
          /* Responsive Design */
          @media (max-width: 1024px) {
            .teachers-container {
              padding: 20px 16px;
            }
            
            .teachers-header h1 {
              font-size: 2.2rem;
            }
            
            .teachers-grid {
              gap: 20px;
            }
            
            .teacher-card {
              padding: 20px;
            }
          }
          
          @media (max-width: 768px) {
            .teachers-header {
              padding: 24px 16px;
              margin-bottom: 32px;
            }
            
            .teachers-header h1 {
              font-size: 2rem;
              margin-bottom: 12px;
            }
            
            .teachers-header p {
              font-size: 1rem;
            }
            
            .teachers-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            
            .teacher-card {
              padding: 20px;
            }
            
            .teacher-avatar {
              width: 70px;
              height: 70px;
              font-size: 30px;
              margin-bottom: 16px;
            }
            
            .teacher-name {
              font-size: 1.2rem;
            }
            
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            
            .stat-number {
              font-size: 2rem;
            }
          }
          
          @media (max-width: 480px) {
            .teachers-header h1 {
              font-size: 1.8rem;
            }
            
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .stat-item {
              padding: 12px;
            }
            
            .stat-number {
              font-size: 1.8rem;
            }
            
            .stat-label {
              font-size: 0.9rem;
            }
            
            .teacher-card {
              padding: 16px;
            }
            
            .teacher-avatar {
              width: 60px;
              height: 60px;
              font-size: 24px;
            }
            
            .teacher-name {
              font-size: 1.1rem;
            }
          }
          
          /* Animation for cards */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .teacher-card {
            animation: fadeInUp 0.6s ease forwards;
          }
          
          .teacher-card:nth-child(1) { animation-delay: 0.1s; }
          .teacher-card:nth-child(2) { animation-delay: 0.2s; }
          .teacher-card:nth-child(3) { animation-delay: 0.3s; }
          .teacher-card:nth-child(4) { animation-delay: 0.4s; }
          .teacher-card:nth-child(5) { animation-delay: 0.5s; }
          .teacher-card:nth-child(6) { animation-delay: 0.6s; }
        `}
      </style>

      <div className="teachers-container">
        {/* Header Section */}
        <div className="teachers-header">
          <h1>Our Teaching Faculty</h1>
          <p>Meet our dedicated team of educators committed to excellence in teaching</p>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading our teaching staff...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <p className="error-message">Error: {error}</p>
            <p>Please try refreshing the page or contact support if the problem persists.</p>
          </div>
        )}
        
        {!loading && !error && teacher.length === 0 && (
          <div className="empty-container">
            <div className="empty-icon">👨‍🏫</div>
            <p>No teachers found in our database.</p>
          </div>
        )}

        {!loading && !error && teacher.length > 0 && (
          <>
            <div className="teachers-grid">
              {teacher.map((t) => (
                <div key={t.id} className="teacher-card">
                  <div className="teacher-avatar">👨‍🏫</div>
                  <h2 className="teacher-name">{t.Name}</h2>
                  <p className="teacher-email">{t.Email}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">{teacher.length}+</div>
                  <div className="stat-label">Qualified Teachers</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Verified Credentials</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};