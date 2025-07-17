import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurServices from "./pages/OurServices";
import OurStory from "./pages/OurStory";

function App() {

  return (
    <Router basename="/"> 
      {/* <Header toggleDropdown={toggleDropdown} openDropdown={openDropdown} /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/OurServices" element={<OurServices />}/>
        <Route path="/OurStory" element={<OurStory />}/>
      </Routes>
    </Router>
  )
}

export default App
