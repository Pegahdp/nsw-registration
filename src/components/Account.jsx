import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <p> Manage you account</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
