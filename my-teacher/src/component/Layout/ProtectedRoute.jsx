// component/UI/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../context/MyTeacher";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" replace />;
};