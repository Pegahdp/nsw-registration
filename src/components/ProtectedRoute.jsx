import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
    return null;
  }
  return children;
};
