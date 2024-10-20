import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About.js";
import Navbar from "./pages/Navbar.js";
import Projects from "./pages/Projects.js";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
