import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";
import FarmerPage from "./Component/FarmerDashboard/Farmerpage";
import DetailPage from "./Component/DetailPage";
import GovernmentDashboard from "./Component/GovernmentDashboard/GovernemntDashboard";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        {/* <Route path="/farmer" element={<FarmerPage />} /> */}
        {/* <Route path="/govt" element={<SelectLocation />} /> */}
        <Route path="/govt" element={<GovernmentDashboard />} />

        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
