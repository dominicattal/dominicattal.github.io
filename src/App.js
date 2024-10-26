import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About.js";
import Navbar from "./pages/Navbar.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
