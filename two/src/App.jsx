import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Header from "./components/home/header/Header";
import Product from "./components/home/Product";
import InfiniteScrollTags from "./components/home/InfiniteLoopSlider";
import ExplorePage from "./components/home/page/ExplorePage";
import Explore from "./components/home/Explore";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Explore/>
              <Product />
              <InfiniteScrollTags />
            </>
          }
        />

        {/* Explore Page - ab neeche kar deya hia to only bas ye hee dekhga waha jane per */}
        <Route path="/explore" element={<ExplorePage />} />
     
      </Routes>
  
    </Router>
  );
}

export default App;
