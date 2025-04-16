import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Animal from "./pages/Animal";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import BookingSuccess from "./pages/BookingSuccess";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/animal/cachorro">Animal</Link>
        <Link to="/rooms">Quartos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
