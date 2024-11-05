import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Account from "./pages/Account";
import { AuthProvider, useAuth } from "./AuthContext";

function RedirectIfLoggedIn({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/account");
    return null;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/signin"
          element={
            <RedirectIfLoggedIn>
              <Signin />
            </RedirectIfLoggedIn>
          }
        />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
