import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Social></Social>
    </>
  );
}

export default App;
