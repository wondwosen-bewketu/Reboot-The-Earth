import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Loginpage"; // Import the LoginPage component
import LandingPage from "./component/LandingPage";

function App() {
  return (
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
