import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Signup />}></Route>
      <Route path={"/signin"} element={<Signin />}></Route>
      <Route path={"/homepage"} element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
