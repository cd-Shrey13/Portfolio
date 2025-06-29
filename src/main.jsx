import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "./pages/Home/Index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project/Project.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About/About.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <header className="bg- sticky top-0 left-0 z-999 items-center justify-between backdrop-blur-md lg:flex lg:flex-col">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
