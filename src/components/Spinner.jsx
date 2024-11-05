import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./spinner.css";

export default function Spinner() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress sx={{ color: "white" }} />
    </Box>
  );
}
