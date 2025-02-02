import { Routes, Route, Link } from "react-router-dom";
import Events from "./pages/Events";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact"; // Importing Contact page
import Footer from "./Footer"; // Importing Footer component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import custom CSS for additional styling

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>Discover more about us and our events.</p>
    </div>
  );
}

export function Navbar() { // Exporting Navbar
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary"> {/* Updated to darker grey */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mrisa</Link> {/* Updated brand name */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Centering the navbar items */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Adding Footer component */}
    </>
  );
}

export default App;
