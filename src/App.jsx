import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";
import FarmerPage from "./Component/Farmerpage";
import NavBar from "./Component/NavBar";
// import AdminDashboard from "./Component/AdminDashboard";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
