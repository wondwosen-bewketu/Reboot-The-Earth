import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";
import UserDashboard from "./Component/UserDashboard";
import FarmerPage from "./Component/Farmerpage";
import SelectLocation from "./Component/selectLocation";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/user" element={<UserDashboard />} />
        {/* <Route path="/farmer" element={<FarmerPage />} /> */}
        {/* <Route path="/govt" element={<SelectLocation />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
