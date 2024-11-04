import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Congrats! Your account has been confirmed</p>

      <button onClick={() => navigate("/account")} className="border">
        Complete you profile
      </button>
    </div>
  );
}
