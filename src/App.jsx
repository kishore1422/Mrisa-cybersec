import { Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";

function Home() {
  return <h1>About Us</h1>;
}



function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> <br />
      <Link to="/about">About</Link> <br />
      <Link to="/events">Events</Link> <br />
      <Link to="/contact">ContactUs</Link> <br />
      <p>Mrisa</p>
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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;