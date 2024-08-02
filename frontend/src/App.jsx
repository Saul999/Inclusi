import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Card";
import CivicTools from "./components/CivicTools";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Translator from "./components/Translator";
import Contact from "./components/Contact";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Router>
          <Routes>
            <Route path="/" element={<Cards></Cards>}></Route>
            <Route path="/civic" element={<CivicTools />}></Route>
            <Route path="/translator" element={<Translator />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
