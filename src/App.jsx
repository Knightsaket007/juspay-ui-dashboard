import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LeftPanel from "./components/layout/LeftPanel";
import Dashboard from "./pages/Dashboard/Dashboard";
import RightPanel from "./components/layout/RightPanel";


function App() {
  return (
    <Router>
        <div className="flex w-[100%]">
          <LeftPanel />
          <div className="bg-pink-500 w-[100%]">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
          <RightPanel />
        </div>

    </Router>
  );
}

export default App;
