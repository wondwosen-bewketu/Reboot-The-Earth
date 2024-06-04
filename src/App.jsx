import LoginPage from "./component/Loginpage"; // Import the LoginPage component
import LandingPage from "./component/LandingPage";
import AdminDashboard from "./component/AdminDashboard";

import LoginPage from "./Component/LandingPagee"; // Import the LoginPage component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import LandingPage from "./Component/Landingpage";

function App() {
  return (
    <>
      {/* <LoginPage /> */}
      {/* <LandingPage /> */}
      <AdminDashboard />
    </>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
