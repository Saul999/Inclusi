import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Cards from "./components/Card";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Cards />
        {/* You can add your Routes here */}
      </div>
    </Router>
  );
}

export default App;
