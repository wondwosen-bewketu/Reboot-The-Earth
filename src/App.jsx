import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";
import AdminDashboard from "./Component/AdminDashboard";
import FarmerPage from "./Component/FarmerPage";
import SelectLocation from "./Component/selectLocation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/govt" element={<SelectLocation />} />
      </Routes>
    </Router>
  );
}

export default App;
