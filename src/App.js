import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import FeaturedRobots from "./FeaturedRobots";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
        <Router>

          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/robots" element={<FeaturedRobots />}></Route>
            <Route exact path="services" element={<Services />}></Route>
            <Route exact path="/testimonials" element={<Testimonials />}></Route>
          </Routes>

          <Footer />

        </Router>
    );
  }
}

export default App;
