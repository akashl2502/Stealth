import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full">
      <Sidebar />
      <Navbar />{" "}
      {/*Hero is implemented under the navbar inside the navbar component */}
    </div>
  );
}

export default App;
