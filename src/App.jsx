import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Social></Social>
    </div>
  );
}

export default App;
