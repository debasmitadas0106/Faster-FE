import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Careers from "./pages/Careers";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register_temp";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// Separate component so we can access useLocation
function AppContent() {
  const location = useLocation();

  // Hide navbar on these routes
  const hideNavbar = ["/signin", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
