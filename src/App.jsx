import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [regionCode, setRegionCode] = useState("US"); // Region Code State

  return (
    <div>
      <Navbar 
        setSidebar={setSidebar} 
        setSearchQuery={setSearchQuery} 
        setRegionCode={setRegionCode} 
      />
      <Routes>
        <Route 
          path="/" 
          element={<Home sidebar={sidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} regionCode={regionCode} />} 
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
