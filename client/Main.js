import React from "react";
/* 
    This is you entry point for your routes
*/
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Reader from "./components/Reader";
import VideoContainer from "./components/VideoContainer";
import YouTubeContainer from "./components/YouTubeContainer";
import Courses from './components/Courses'

// Import our custom CSS
import '../client/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

const Main = () => {
  return (
    <div className="wrapper">
      <NavBar/>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
          <Route path="/reader" element={<Reader />}></Route>
          <Route path="/video-player" element={<VideoContainer />}></Route>
          <Route path="/video-embed" element={<YouTubeContainer />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/subCategories/:subCategoryId" element={<Courses />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
