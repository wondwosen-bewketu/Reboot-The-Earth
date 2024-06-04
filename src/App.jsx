import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";
import UserDashboard from "./Component/UserDashboard";
import FarmerPage from "./Component/Farmerpage";
import SelectLocation from "./Component/selectLocation";
import DetailPage from "./Component/DetailPage";
import Navbar from "./Component/navBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/farmer" element={<FarmerPage />} />
        <Route path="/user" element={<UserDashboard />} />
        {/* <Route path="/farmer" element={<FarmerPage />} /> */}
        {/* <Route path="/govt" element={<SelectLocation />} /> */}
        <Route path="/govt" element={<SelectLocation />} />

        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
