
import LoginPage from "./Component/Loginpage"; // Import the LoginPage component
import MapComponent from "./Component/selectLocation"
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';

// Bind modal to the app root
Modal.setAppElement('#root');
function App() {
  return (
    <>
     <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<MapComponent />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
