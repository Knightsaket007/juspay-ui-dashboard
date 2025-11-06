import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LeftPanel from "./components/layout/LeftPanel";
import Dashboard from "./pages/Dashboard/Dashboard";
import RightPanel from "./components/layout/RightPanel";
import { useState } from "react";


function App() {

  const [isopen, setisopen] = useState(true)

  return (
    <Router>
        <div className="flex w-[100%]">
          <LeftPanel isopen={isopen} setisopen={setisopen}/>
          <div className=" w-[100%]">
            <Navbar setisopen={setisopen}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
          {/* <RightPanel /> */}
        </div>

    </Router>
  );
}

export default App;
