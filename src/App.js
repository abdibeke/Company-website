import NavBar from "./Component/Common/NavBar";
import Footer from "./Component/Common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/styles.css";
import Home from "./Component/Pages/Home";
import React from "react";
import AboutUs from "./Component/Pages/AboutUs";
import ContactUs from "./Component/Pages/ContactUs";

function App() {
  return (
    <div>
      <NavBar />

      <Router>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/AboutUs" Component={AboutUs} exact />
          <Route path="/ContactUs" Component={ContactUs} exact />
          <Route path="/Home" Component={Home} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
